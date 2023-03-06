import { Form, Formik } from "formik";
import { VStack } from "@chakra-ui/react";
import CustomFormGroup from "@/components/shared/CustomFormGroup";
import { InputType } from "@/lib/enums/form";
import { statusOptions } from "@/components/modules/Citizen/constants";
import { CitizenCreateValues } from "@/lib/models/citizen";
import { FormikConfig } from "formik/dist/types";

interface CreateCitizenFormProps {
    createCitizenFormikConfig: FormikConfig<CitizenCreateValues>
}

const CreateCitizenForm = ({ createCitizenFormikConfig }: CreateCitizenFormProps) => {
    return (
        <Formik
            {...createCitizenFormikConfig}
        >
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} id="createCitizenForm">
                    <VStack spacing={4}>
                        <CustomFormGroup name="name" label="Name"/>
                        <CustomFormGroup name="phone" label="Phone"/>
                        <CustomFormGroup name="email" label="Email"/>
                        <CustomFormGroup name="pin" label="PIN"/>
                        <CustomFormGroup name="address" label="Address"/>
                        <CustomFormGroup name="date" label="Date" type={InputType.date}/>
                        <CustomFormGroup
                            name="status"
                            label="Status"
                            type={InputType.select}
                            options={statusOptions}
                        />
                    </VStack>
                </Form>
            )}
        </Formik>
    )
}

export default CreateCitizenForm;