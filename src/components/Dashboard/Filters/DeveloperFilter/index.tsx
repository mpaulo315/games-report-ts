import { TagPicker } from "rsuite";
import { useDevelopers } from "../../../../hooks/useFiltersData";
import { useDevelopersStore } from "./store";


export const DeveloperFilter = () => {
  const { data, isLoading } = useDevelopers();
  const { store, addStoreValue, setStoreValue } = useDevelopersStore();

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
        virtualized
      />
    </>
  );
};
