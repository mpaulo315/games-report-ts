import { Col, Container, FlexboxGrid } from "rsuite";
import { NPGChart } from "../Charts/NPGChart";
import { SPGChart } from "../Charts/SPGChart";
import { AvgSPGChart } from "../Charts/AvgSPGChart";

export const Dashboard = () => {
  // const {filteredData} = useContext(ChartDataContext)

  return (
    <>
      <Container>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item as={Col} colspan={24} md={12}>
            <NPGChart />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item as={Col} colspan={24} md={12}>
            <SPGChart />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item as={Col} colspan={24} md={12}>
            <AvgSPGChart />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Container>
    </>
  );
};
