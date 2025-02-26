import { useQuery } from "@tanstack/react-query"
import { getReleaseDateRangeServ } from "../services/Filters"

export const useReleaseDateRange = () => {
    const query = useQuery(
        {
            queryFn: getReleaseDateRangeServ,
            queryKey: ["release-date-range"],
            
        }
    )

    return {
        ...query,
        data: query.data
    }
}