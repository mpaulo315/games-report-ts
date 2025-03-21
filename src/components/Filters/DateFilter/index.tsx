import { DateFilter } from "./component";
import { useDateFilterStore } from "./store";

export const createFilter = () => {
  const store = useDateFilterStore;
  const element = <DateFilter store={store}/>;

  return { element, store };
}