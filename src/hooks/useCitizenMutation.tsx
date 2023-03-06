import { Citizen, CitizenCreateValues } from "@/lib/models/citizen";
import { useMutation, useQueryClient } from "react-query";
import citizenService from "@/services/citizen.service";

interface UseCitizenMutationProps {
    onSuccess?: (citizen: Citizen) => void;
    onError?: (error: any) => void;
}

const useCitizenMutation = ({ onSuccess }: UseCitizenMutationProps = {}) => {
    const queryClient = useQueryClient();

    return useMutation((citizen: CitizenCreateValues) => citizenService.createCitizen(citizen), {
        onSuccess: (response: Citizen) => {
            queryClient.invalidateQueries("citizenList");
            onSuccess && onSuccess(response);
        },
        onError: (error: any) => {

        },
    })
}

export default useCitizenMutation;