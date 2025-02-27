import { ItemDataType } from "rsuite/esm/MultiCascadeTree";
import {
  getDevelopers,
  getGenres,
  getPublishers,
  getReleaseDateRange,
} from "../../repositories/Filters";

export const getReleaseDateRangeServ = async (): Promise<[Date, Date]> => {
  const { start_date: startDateM, end_date: endDateM } =
    await getReleaseDateRange();

  return [new Date(startDateM), new Date(endDateM)];
};

export const getPublishersAsItems = async (): Promise<
  ItemDataType<string>[]
> => {
  const publishers = await getPublishers();

  return publishers.map((publisher) => ({
    label: publisher ? publisher : "No publisher",
    value: publisher,
  }));
};

export const getDevelopersAsItems = async (): Promise<
  ItemDataType<string>[]
> => {
  const developers = await getDevelopers();
  return developers.map((developer) => ({
    label: developer ? developer : "No developer",
    value: developer,
  }));
};

export const getGenresAsItems = async (): Promise<ItemDataType<string>[]> => {
  const genres = await getGenres();
  return genres.map((genre) => ({
    label: genre,
    value: genre,
  }));
};
