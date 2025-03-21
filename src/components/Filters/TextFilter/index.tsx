import { UseQueryResult } from "@tanstack/react-query";
import { ItemDataType } from "rsuite/esm/MultiCascadeTree";
import { useTextFilterStore } from "./store";
import { TextFilter } from "./component";

export const createFilter = (
  query: () => UseQueryResult<ItemDataType<string>[], Error>
) => {
  const store = useTextFilterStore;
  const element = <TextFilter query={query} store={store} />;

  return {
    store,
    element,
  };
};
