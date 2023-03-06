import * as Yup from "yup";

export const createCitizenValidationSchema = Yup.object({
    name: Yup.string().min(4).required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/^(\+994)(50|51|55|70|77)(\d{3})(\d{2})(\d{2})$/).required("Phone is not valid"),
    pin: Yup.string().required("PIN is required"),
    date: Yup.date().default(() => new Date()).required("Date is required"),
    address: Yup.string().required("Address is required"),
    status: Yup.string().required("Status is required"),
})