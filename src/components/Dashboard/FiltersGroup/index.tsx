import { Col, FlexboxGrid } from "rsuite";
import { GenreFilter } from "../Filters/GenreFilter";
import { DeveloperFilter } from "../Filters/DeveloperFilter";
import { PublisherFilter } from "../Filters/PublisherFilter";
import { DateRangeFilter } from "../Filters/DateRangeFilter";
import { ScoreRangeFilter } from "../Filters/ScoreRangeFilter";

export const FilterGroup = () => {
  return (
    <>
      <FlexboxGrid justify="space-around">
        <FlexboxGrid.Item as={Col} colspan={24} md={4}>
          <GenreFilter />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item as={Col} colspan={24} md={4}>
          <DeveloperFilter />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item as={Col} colspan={24} md={4}>
          <PublisherFilter />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item as={Col} colspan={24} md={6}>
          <ScoreRangeFilter />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item as={Col} colspan={24} md={6}>
          <DateRangeFilter />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
};
