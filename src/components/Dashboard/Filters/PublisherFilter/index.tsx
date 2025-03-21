import { TagPicker } from "rsuite";
import { usePublishers } from "../../../../hooks/useFiltersData";
import { usePublishersStore } from "./store";

export const PublisherFilter = () => {
  const { data, isLoading } = usePublishers();
  const { store, addStoreValue, setStoreValue } = usePublishersStore();

  if (isLoading) {
    return (
      <TagPicker data={[]} loading={isLoading} disabled={isLoading} block />
    );
  }

  return (
    <>
      <TagPicker
        data={data!}
        value={store}
        onChange={setStoreValue}
        onSelect={addStoreValue}
        cleanable
        block
      />
    </>
  );
};
