import { TagPicker } from "rsuite";
import { StoreApi, UseBoundStore } from "zustand";
import { iTextFilterStore } from "./type";
import { UseQueryResult } from "@tanstack/react-query";
import { ItemDataType } from "rsuite/esm/MultiCascadeTree";

interface Props {
  query: () => UseQueryResult<ItemDataType<string>[], Error>;
  store: UseBoundStore<StoreApi<iTextFilterStore>>;
}

export const TextFilter = ({ query, store }: Props) => {
  const { data, isLoading } = query();
  const { storeValue, addStoreValue, setStoreValue } = store();

  if (isLoading) {
    return (
      <TagPicker data={[]} loading={isLoading} disabled={isLoading} block />
    );
  }

  return (
    <>
      <TagPicker
        data={data!}
        value={storeValue}
        onChange={setStoreValue}
        onSelect={addStoreValue}
        cleanable
        block
      />
    </>
  );
};
