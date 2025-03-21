import { TagPicker } from "rsuite";
import { useGenres } from "../../../../hooks/useFiltersData";
import { useGenresStore } from "./store";

export const GenreFilter = () => {
  const { data, isLoading } = useGenres();
  const { store, addStoreValue, setStoreValue } = useGenresStore();

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
