import { useChartData } from "../../hooks/useChartData";
import { ChartDataContext } from "../../contexts/ChartDataContext";
import { useGenresStore } from "../../components/Dashboard/Filters/GenreFilter/store";
import { usePublishersStore } from "../../components/Dashboard/Filters/PublisherFilter/store";
import { useDevelopersStore } from "../../components/Dashboard/Filters/DeveloperFilter/store";
import { useDateFilterStore } from "../../components/Dashboard/Filters/DateRangeFilter/store";
import { useRangeFilterStore } from "../../components/Dashboard/Filters/ScoreRangeFilter/store";
import { useMemo } from "react";

type Props = {
  children?: React.ReactNode;
};

export const ChartDataContextProvider = ({ children }: Props) => {
  const { data, isLoading, isError, error } = useChartData();
  const genresStore = useGenresStore((state) => state.store);
  const publishersStore = usePublishersStore((state) => state.store);
  const developersStore = useDevelopersStore((state) => state.store);
  const dateRange = useDateFilterStore((state) => state.dateRange);
  const scoreRange = useRangeFilterStore((state) => state.range);


  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter((item) => {
      const genreMatch =
        genresStore.length === 0 ||
        genresStore.some((genre) => item.genre === genre);
      const publisherMatch =
        publishersStore.length === 0 ||
        publishersStore.some((publisher) => item.publisher === publisher);
      const developerMatch =
        developersStore.length === 0 ||
        developersStore.some((developer) => item.developer === developer);
      const dateMatch =
        item.release_date >= dateRange[0].getTime() &&
        item.release_date <= dateRange[1].getTime();
      const scoreMatch =
        item.critic_score &&
        item.critic_score >= scoreRange[0] &&
        item.critic_score <= scoreRange[1];

      return (
        genreMatch &&
        publisherMatch &&
        developerMatch &&
        dateMatch &&
        scoreMatch
      );
    });
  }, [
    data,
    genresStore,
    publishersStore,
    developersStore,
    dateRange,
    scoreRange,
  ]);

  
  return (
    <ChartDataContext.Provider
      value={{ filteredData, data, isLoading, isError, error }}
    >
      {children}
    </ChartDataContext.Provider>
  );
};
