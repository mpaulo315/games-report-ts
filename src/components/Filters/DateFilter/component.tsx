import { StoreApi, UseBoundStore } from "zustand";
import { useReleaseDateRange } from "../../../hooks/useFiltersData";
import { useEffect } from "react";
import { iDateFilterStore } from "./type";
import { DateRangePicker } from "rsuite";

const { allowedRange } = DateRangePicker;

interface Props {
  store: UseBoundStore<StoreApi<iDateFilterStore>>;
}

export const DateFilter = ({ store }: Props) => {
  const { dateRange, setDateRange } = store();

  const { data, isLoading } = useReleaseDateRange();

  useEffect(() => {
    setDateRange(data!);
  }, [data, setDateRange]);

  if (isLoading) {
    return (
      <DateRangePicker loading={isLoading} disabled={isLoading} block={true} />
    );
  }
  return (
    <>
      <DateRangePicker
        shouldDisableDate={allowedRange(...data!)}
        weekStart={0}
        editable={false}
        showHeader={false}
        block={true}
        ranges={[]}
        calendarSnapping={true}
        character=" | "
        onOk={setDateRange}
        value={dateRange}
      />
    </>
  );
};
