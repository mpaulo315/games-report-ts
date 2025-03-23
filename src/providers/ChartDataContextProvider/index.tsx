import { usePaginatedChartData } from "../../hooks/useChartData";
import { ChartDataContext } from "../../contexts/ChartDataContext";
import { useGenresStore } from "../../components/Dashboard/Filters/GenreFilter/store";
import { usePublishersStore } from "../../components/Dashboard/Filters/PublisherFilter/store";
import { useDevelopersStore } from "../../components/Dashboard/Filters/DeveloperFilter/store";
import { useDateFilterStore } from "../../components/Dashboard/Filters/DateRangeFilter/store";
import { useRangeFilterStore } from "../../components/Dashboard/Filters/ScoreRangeFilter/store";
import { useEffect, useMemo } from "react";

type Props = {
  children?: React.ReactNode;
};

export const ChartDataContextProvider = ({ children }: Props) => {
  // const { data, isLoading, isError, error } = useChartData();
  const {
    data: dataPages,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = usePaginatedChartData();
  const genresStore = useGenresStore((state) => state.store);
  const publishersStore = usePublishersStore((state) => state.store);
  const developersStore = useDevelopersStore((state) => state.store);
  const dateRange = useDateFilterStore((state) => state.dateRange);
  const scoreRange = useRangeFilterStore((state) => state.range);

  useEffect(() => {
    if (!isFetchingNextPage && hasNextPage) fetchNextPage();
  }, [isFetchingNextPage, fetchNextPage, hasNextPage]);

  const filteredData = useMemo(() => {
    if (!dataPages) return [];

    const data = dataPages.pages.flatMap((page) => page);

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
    dataPages,
    genresStore,
    publishersStore,
    developersStore,
    dateRange,
    scoreRange,
  ]);

  return (
    <ChartDataContext.Provider
      value={{
        filteredData,
        isLoading: isLoading && isFetchingNextPage,
        isError,
        error,
      }}
    >
      {children}
    </ChartDataContext.Provider>
  );
};
