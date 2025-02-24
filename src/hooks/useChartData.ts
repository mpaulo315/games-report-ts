import { useQuery } from "@tanstack/react-query"
import { getGames } from "../repositories/Games"

export const useChartData = () => {
    const query = useQuery({
        queryFn: getGames,
        queryKey: ["chart-data"],

    })

    return {
        ...query,
        data: query.data
    }
}