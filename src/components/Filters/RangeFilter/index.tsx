import { useState } from "react";
import { RangeSlider } from "rsuite";

export const RangeFilter = () => {
  const [value, setValue] = useState<[number, number]>([0, 10]);
  console.log(value);

  return (
    <>
      <RangeSlider
        value={value}
        step={0.1}
        min={0}
        max={10}
        onChange={setValue}
        renderMark={(mark) => {
          if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(mark)) {
            return <span>{mark}</span>;
          }
        }}
        progress
        tooltip
      />
    </>
  );
};
