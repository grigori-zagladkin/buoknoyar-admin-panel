import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent, FC } from "react";

interface IFormInputProps {
    formLabel: string;
    value: string | number;
    type: string;
    placeholder: string;
    setValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: FC<IFormInputProps> = ({ formLabel, value, type, placeholder, setValue }) => {
    return (
        <FormControl isRequired>
            <FormLabel>{formLabel}</FormLabel>
            <Input type={type} value={value} placeholder={placeholder} onChange={setValue} />
        </FormControl>
    );
};

export default FormInput;
