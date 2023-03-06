import { CitizenCreateValues } from "@/lib/models/citizen";

export const statusOptions = [
    {
        value: "Normal",
        label: "Normal"
    },
    {
        value: "Blocked",
        label: "Blocked"
    },
    {
        value: "Deleted",
        label: "Deleted"
    },
]

export const initialValues: CitizenCreateValues = {
    name: "",
    email: "",
    phone: "",
    pin: "",
    date: new Date(),
    address: "",
    status: "Normal",
}
