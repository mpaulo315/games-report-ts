import { useEffect, useState } from "react";
import { DateRangePicker } from "rsuite";
import { useReleaseDateRange } from "../../../hooks/useFiltersData";

const { allowedRange } = DateRangePicker;

export const DateFilter = () => {
  const { data, isLoading } = useReleaseDateRange();

  const [[startDate, endDate], setValue] = useState<[Date, Date]>([
    new Date(),
    new Date(),
  ]);
  
  useEffect(() => setValue(data!), [data]);

  return (
    <>
      <DateRangePicker
        shouldDisableDate={allowedRange(
          data ? data[0] : new Date(),
          data ? data[1] : new Date()
        )}
        defaultValue={data}
        weekStart={0}
        editable={false}
        showHeader={false}
        block={true}
        ranges={[]}
        calendarSnapping={true}
        character=" | "
        limitStartYear={50}
        onOk={setValue}
        loading={isLoading}
        disabled={isLoading}
        value={[startDate, endDate]}
      />
    </>
  );
};
