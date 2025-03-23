import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getGames, getPaginatedGames } from "../repositories/Games";

export const useChartData = () => {
  const query = useQuery({
    queryFn: getGames,
    queryKey: ["chart-data"],
  });

  return query;
};

export const usePaginatedChartData = () => {
  return useInfiniteQuery({
    queryKey: ["pg-chart-data"],
    initialPageParam: 1,
    queryFn: getPaginatedGames,
    getNextPageParam: (lastPage, pages) =>
      lastPage?.length ? pages.length + 1 : undefined,
  });
};
