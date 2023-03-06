import { useField } from "formik";
import { FormControl, FormErrorMessage, FormLabel, Input, Select } from "@chakra-ui/react";
import { Citizen } from "@/lib/models/citizen";
import { InputType } from "@/lib/enums/form";


interface CustomFormGroupProps {
    name: string
    label: string
    type?: InputType
    options? : { value: string, label: string }[]
}

type CitizenCreateValues = Omit<Citizen, "id">

const CustomFormGroup = ({ name, label, options, type = InputType.text }: CustomFormGroupProps) => {
    const [field, meta, helpers] = useField(name);

    return (
        <FormControl isInvalid={!!meta.error && meta.touched} isRequired>
            <FormLabel htmlFor={name} color="gray.200">{label}</FormLabel>
            {type === InputType.textarea && (
                <Input as="textarea" {...field} id={name} placeholder={label}/>
            )}

            {type === InputType.select && (
                <Select {...field} id={name} placeholder={label}>
                    {options?.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </Select>
            )}

            {type !== InputType.textarea && type !== InputType.select && (
                <Input color="gray.200" {...field} type={type} id={name} placeholder=""/>
            )}
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    )
}

export default CustomFormGroup;