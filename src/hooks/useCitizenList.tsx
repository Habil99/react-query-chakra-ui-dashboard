import { useQuery } from "react-query";
import citizenService from "@/services/citizen.service";
import { Pagination } from "@/lib/models/pagination";

interface UseCitizenListProps extends Pagination {}

const useCitizenList = ({ page, limit }: UseCitizenListProps) => {
    return useQuery("citizenList", () => citizenService.getCitizens({ page, limit }));
}

export default useCitizenList;