import { Citizen, CitizenCreateValues } from "@/lib/models/citizen";
import { useMutation, useQueryClient } from "react-query";
import citizenService from "@/services/citizen.service";
import toast from "react-hot-toast";

interface UseCitizenMutationProps {
    onSuccess?: (citizen: Citizen) => void;
    onError?: (error: any) => void;
}

const useCitizenMutation = ({ onSuccess }: UseCitizenMutationProps = {}) => {
    const queryClient = useQueryClient();

    const showSuccessToast = (message: string) => {
        toast(message, {
            icon: "👏",
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
                fontFamily: "Poppins",
            }
        })
    }

    const handleSuccess = (citizen: Citizen) => {
        queryClient.invalidateQueries("citizenList");
        onSuccess && onSuccess(citizen);
    }

    return {
        createCitizen: useMutation((citizen: CitizenCreateValues) => citizenService.createCitizen(citizen), {
            onSuccess: (response: Citizen) => {
                handleSuccess(response);
                showSuccessToast(`${response.name} created successfully`);
            },
        }),
        deleteCitizen: useMutation((citizenId: number) => citizenService.deleteCitizen(citizenId), {
            onSuccess: (response: Citizen) => {
                handleSuccess(response)
                showSuccessToast(`${response.name} deleted successfully`);
            }
        }),
    }
}

export default useCitizenMutation;