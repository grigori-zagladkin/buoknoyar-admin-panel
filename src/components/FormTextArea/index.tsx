import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { ChangeEvent, FC } from "react";

interface IFormTextAreaProps {
    formLabel: string;
    value: string;
    setValue: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    placeHolder: string;
}

const FormTextArea: FC<IFormTextAreaProps> = ({ formLabel, value, setValue, placeHolder }) => {
    return (
        <FormControl isRequired>
            <FormLabel>{formLabel}</FormLabel>
            <Textarea value={value} onChange={setValue} placeholder={placeHolder} />
        </FormControl>
    );
};

export default FormTextArea;
