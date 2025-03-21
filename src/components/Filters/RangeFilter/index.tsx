import { RangeFilter } from "./component";
import { useRangeFilterStore } from "./store";
import "./style.css";

export const createFilter = () => {
  const store = useRangeFilterStore;
  const element = <RangeFilter store={store} />;

  return { element, store };
};
