import { useReleaseDateRange } from "../../../../hooks/useFiltersData";
import { useEffect } from "react";
import { DateRangePicker } from "rsuite";
import { useDateFilterStore } from "./store";

const { allowedRange } = DateRangePicker;

export const DateRangeFilter = () => {
  const { dateRange, setDateRange } = useDateFilterStore();

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
