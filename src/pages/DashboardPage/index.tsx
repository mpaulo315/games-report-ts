import { Divider } from "rsuite";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { FilterGroup } from "../../components/Dashboard/FiltersGroup";
import { ChartDataContextProvider } from "../../providers/ChartDataContextProvider";

export const DashboardPage = () => {
  return (
    <>
      <FilterGroup />
      <Divider></Divider>
      <ChartDataContextProvider>
        <Dashboard />
      </ChartDataContextProvider>
    </>
  );
};
