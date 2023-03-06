import { Citizen } from "@/lib/models/citizen";
import { Button } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import useCitizenMutation from "@/components/modules/Citizen/hooks/useCitizenMutation";

const CitizenTableAction = ({ citizen }: { citizen: Citizen }) => {
    const { deleteCitizen: { mutate: deleteCitizen, isLoading: isDeleting } } = useCitizenMutation()

    return (
        <HStack spacing={1}>
            <Button
                colorScheme="red"
                _hover={{ bgColor: "red" }}
                bgColor="red.500"
                size="sm"
                onClick={() => deleteCitizen(citizen.id)}
                isLoading={isDeleting}
            >
                <DeleteIcon/>
            </Button>
            <Button
                colorScheme="green"
                _hover={{ bgColor: "green" }}
                bgColor="green.500"
                size="sm"
                onClick={() => {
                }}
            >
                <EditIcon/>
            </Button>
        </HStack>
    )
}

export default CitizenTableAction;