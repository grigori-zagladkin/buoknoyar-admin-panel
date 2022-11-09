import { Heading, Stack } from "@chakra-ui/react";
import { FC, useState } from "react";
import FormInput from "../../components/FormInput";
import SearchItem from "../../components/Items/SearchItem/SearchItem";

const UpdateItemPage: FC = () => {
    const [isFound, setIsFound] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    return (
        <Stack>
            <Heading as="h2">Обновление товара</Heading>
            <SearchItem />
            {/* {
                isFound && (
                    // <FormInput />
                    // <FormInput />
                    // <FormInput />
                    // <FormInput />
                    // <FormInput />
                    // <FormInput />
                )
            } */}
        </Stack>
    );
};

export default UpdateItemPage;
