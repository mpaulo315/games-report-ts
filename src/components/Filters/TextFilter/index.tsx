import { UseQueryResult } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { TagPicker } from "rsuite";
import { ItemDataType } from "rsuite/esm/MultiCascadeTree";

interface Props {
  query: () => UseQueryResult<ItemDataType<string>[], Error>;
}

export const TextFilter = ({ query }: Props) => {
  const { data, isLoading } = query();
  const [value, setValue] = useState<string[]>([]);
  const [cachedData, setCachedData] = useState<ItemDataType<string>[]>([]);

  const handleSelect = useCallback(
    (_: unknown, item: ItemDataType<string>) =>
      setCachedData([...cachedData, item]),
    [cachedData]
  );

  console.log(data?.length);
  
  return (
    <>
      <TagPicker
        data={data || []}
        value={value}
        cacheData={cachedData}
        disabled={isLoading}
        onChange={setValue}
        onSelect={handleSelect}
        loading={isLoading}
        cleanable
        block
      />
    </>
  );
};
