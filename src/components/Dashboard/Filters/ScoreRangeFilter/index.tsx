import { useRef } from "react";
import { Col, InputGroup, RangeSlider } from "rsuite";
import { useRangeFilterStore } from "./store";

import "./styles.css";

export const ScoreRangeFilter = () => {
  const { range, setRange } = useRangeFilterStore();

  const marks = useRef([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).current;

  return (
    <>
      <InputGroup style={{ width: "100%", justifyContent: "space-between" }}>
        <InputGroup.Addon as={Col} xs={2}>
          {range[0]}
        </InputGroup.Addon>
        <RangeSlider
          value={range}
          step={0.1}
          min={0}
          max={10}
          onChange={setRange}
          renderMark={(mark: number) => {
            if (marks.includes(mark)) {
              return <span>{mark}</span>;
            }
          }}
          tooltip={false}
          className="rs-slider"
        />
        <InputGroup.Addon as={Col} xs={2}>
          {range[1]}
        </InputGroup.Addon>
      </InputGroup>
    </>
  );
};
