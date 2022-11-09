import { Button, Heading, Stack } from "@chakra-ui/react";
import { FC, useState, MouseEvent } from "react";
import SearchItem from "../../components/Items/SearchItem/SearchItem";
import { useDeleteItemMutation } from "../../store/services/ItemsAPI";

const DeleteItemPage: FC = () => {
    const [deleteItem] = useDeleteItemMutation();
    const [isFound, setIsFound] = useState<boolean>(false);
    const [findedItemId, setFindedItemId] = useState(1);
    const handleDeleteItem = async (e: MouseEvent<HTMLButtonElement>) => {
        try {
            await deleteItem(findedItemId).unwrap();
            alert("Успешно");
        } catch (error) {
            alert("Ошибка");
            console.warn(error);
        }
    };
    return (
        <Stack>
            <Heading as="h2">Удаление товара</Heading>
            <SearchItem />
            {isFound && <Button onClick={handleDeleteItem}>Удалить товар</Button>}
        </Stack>
    );
};

export default DeleteItemPage;
