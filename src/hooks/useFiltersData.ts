import { useQuery } from "@tanstack/react-query";
import {
    getDevelopersAsItems,
  getGenresAsItems,
  getPublishersAsItems,
  getReleaseDateRangeServ,
} from "../services/Filters";

export const useReleaseDateRange = () => {
  const query = useQuery({
    queryFn: getReleaseDateRangeServ,
    queryKey: ["release-date-range"],
  });
  
  return query;
};

export const usePublishers = () => {
  const query = useQuery({
    queryFn: getPublishersAsItems,
    queryKey: ["publishers"],
  });

  return query;
};

export const useDevelopers = () => {
  const query = useQuery({
    queryFn: getDevelopersAsItems,
    queryKey: ["developers"],
  });
  return query;
};

export const useGenres = () => {
  const query = useQuery({
    queryFn: getGenresAsItems,
    queryKey: ["genres"],
  });
  return query;
};