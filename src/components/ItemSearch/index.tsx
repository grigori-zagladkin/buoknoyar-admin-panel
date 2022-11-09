import { SearchIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useLazyGetAllItemsQuery } from "../../store/services/ItemsAPI";

const ItemSearch: FC = () => {
    const [searchString, setSearchString] = useState<string>("");
    useEffect(() => {}, [searchString]);
    return (
        <Stack>
            <FormControl>
                <FormLabel>Название товара</FormLabel>
                <InputGroup>
                    <InputRightElement>
                        <SearchIcon />
                    </InputRightElement>
                    <Input value={searchString} placeholder="Название товара" />
                </InputGroup>
            </FormControl>
        </Stack>
    );
};

export default ItemSearch;
