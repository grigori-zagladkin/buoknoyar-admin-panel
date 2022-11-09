import { Button, FormControl, FormLabel } from "@chakra-ui/react";
import { FC, MouseEvent } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { useDeleteItemMutation } from "../../../store/services/ItemsAPI";
import SearchItem from "../SearchItem/SearchItem";

const DeleteItem: FC = () => {
    const [deleteItem] = useDeleteItemMutation();
    return (
        <>
            <h3 className="text-2xl font-bold mb-3">Удаление товара</h3>
            <div className="flex flex-col gap-2 border rounded-lg py-3 px-4">
                <FormControl isRequired>
                    <FormLabel>Выберите товар</FormLabel>
                    <SearchItem />
                    <Button
                        onClick={async (e: MouseEvent<HTMLButtonElement>) => {
                            try {
                                await deleteItem(1).unwrap();
                                alert("Успешно");
                            } catch (error) {
                                alert(error);
                            }
                        }}
                    >
                        Удалить товар
                    </Button>
                </FormControl>
            </div>
        </>
    );
};

export default DeleteItem;
