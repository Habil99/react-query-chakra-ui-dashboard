import toast, { Toaster } from "react-hot-toast";
import PageHeader from "@/components/shared/PageHeader";
import ActionTable from "@/components/shared/ActionTable";
import { Avatar } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { useCallback, useState } from "react";
import useCitizenList from "@/components/modules/Citizen/hooks/useCitizenList";
import useCitizenMutation from "@/components/modules/Citizen/hooks/useCitizenMutation";
import { Citizen, CitizenCreateValues } from "@/lib/models/citizen";
import { TableColumnsRecord } from "@/lib/models/table";
import styles from "@/styles/Home.module.css";
import DateFormatter from "@/lib/helpers/date-formatter";
import { createCitizenValidationSchema } from "@/components/modules/Citizen/schemas";
import { initialValues } from "@/components/modules/Citizen/constants";
import CreateCitizenForm from "@/components/modules/Citizen/components/CreateCitizenForm";
import CreateCitizenDrawer from "@/components/modules/Citizen/components/CreateCitizenDrawer";
import CitizenTableAction from "@/components/modules/Citizen/components/CitizenTableAction";

const columns: TableColumnsRecord<Citizen>[] = [
    {
        key: "id",  // This is the key of the data record
        title: "ID", // This will be shown in the table header
        dataIndex: "id",
    },
    {
        key: "name",
        title: "User",
        dataIndex: "name",
        render: (name: string, record: Citizen) => (
            <div className={styles.user}>
                <Avatar name={name} src={(record.photo || record.name) as string} size="sm"/>
                <span>{name}</span>
            </div>
        )
    },
    {
        key: "email",  // This is the key of the data record
        title: "Email", // This will be shown in the table header
        dataIndex: "email",
    },
    {
        key: "phone",
        title: "Phone",
        dataIndex: "phone"
    },
    {
        key: "pin",
        title: "PIN",
        dataIndex: "pin"
    },
    {
        key: "date",
        title: "Date",
        dataIndex: "date",
        render: (date: string) => DateFormatter.format(date)
    },
    {
        key: "address",
        title: "Address",
        dataIndex: "address"
    },
    {
        key: "status",
        title: "Status",
        dataIndex: "status"
    },
    {
        key: "action",
        title: "Action",
        dataIndex: "action",
        render: (text, record) => <CitizenTableAction citizen={record}/>
    }
]

const CitizenModule = () => {
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);

    const closeDrawer = useCallback(() => setDrawerIsOpen(false), []);

    const openDrawer = useCallback(() => setDrawerIsOpen(true), []);

    const { data, isLoading } = useCitizenList({ page, limit });
    const { createCitizen: { mutate: createCitizen, isLoading: citizenCreating } } = useCitizenMutation({
        onSuccess: () => {
            closeDrawer();
        }
    })

    const submitCreateCitizen = useCallback((values: CitizenCreateValues) => {
        createCitizen(values);
    }, [])

    const createCitizenFormikConfig = {
        initialValues,
        onSubmit: submitCreateCitizen,
        validateOnChange: true,
        validationSchema: createCitizenValidationSchema
    }

    return (
        <>
            <Toaster/>
            <PageHeader
                title="Citizens"
                buttonLabel="Add citizen"
                onButtonClick={openDrawer}
            />
            <ActionTable data={data} columns={columns} isLoading={isLoading}/>
            <CreateCitizenDrawer drawerIsOpen={drawerIsOpen} closeDrawer={closeDrawer} footer={
                <>
                    <Button
                        variant="outline"
                        color="gray.200"
                        _hover={{ bg: "fg" }} mr={3}
                        onClick={closeDrawer}
                    >
                        Cancel
                    </Button>
                    <Button
                        colorScheme="blue"
                        type="submit"
                        form="createCitizenForm"
                        isLoading={citizenCreating}
                    >
                        Save
                    </Button>
                </>
            }>
                <CreateCitizenForm createCitizenFormikConfig={createCitizenFormikConfig}/>
            </CreateCitizenDrawer>
        </>
    )
}

export default CitizenModule;