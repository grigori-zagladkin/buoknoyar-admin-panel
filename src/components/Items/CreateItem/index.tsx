import { ChangeEvent, FC, MouseEvent } from "react";
import { Button, FormControl, FormLabel, Input, Spinner } from "@chakra-ui/react";

import FileInput from "../../../ui/FileInput";
import SearchCategory from "../../Category/SearchCategory";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useCreateItemMutation } from "../../../store/services/ItemsAPI";
import { useGetPropertiesByCategoryQuery } from "../../../store/services/PropertiesAPI";
import { setCreatedItem } from "../../../store/slices/ItemsSlice";

interface IProps {
    categoryId: number;
}

const CategoryProperties: FC<IProps> = ({ categoryId }) => {
    const dispatch = useAppDispatch();
    const { data: _properties, error, isLoading } = useGetPropertiesByCategoryQuery(categoryId);
    return (
        <>
            {isLoading && <Spinner size="xl" />}
            {error && <h1>Ошибка</h1>}
            {_properties.map((item, index) => (
                <div key={index}>
                    <Input />
                    <Input />
                </div>
            ))}
        </>
    );
};

const CreateItem: FC = () => {
    const [createItem] = useCreateItemMutation();
    const formData = new FormData();
    const dispatch = useAppDispatch();
    const { createdItem: item } = useAppSelector((state) => state.items);
    return (
        <>
            <h3 className={"font-bold text-2xl mb-3"}>Создание товара</h3>
            <div className={"flex flex-col gap-2 border rounded-lg py-3 px-4"}>
                <FormControl isRequired>
                    <FormLabel>Название товара</FormLabel>
                    <Input
                        value={item.title}
                        type={"text"}
                        placeholder={"Название товара"}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            dispatch(setCreatedItem({ ...item, title: e.target.value }));
                        }}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Количество товара</FormLabel>
                    <Input
                        type={"number"}
                        value={item.count}
                        placeholder={"Количество товара"}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            dispatch(setCreatedItem({ ...item, count: +e.target.value }));
                        }}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Выберите категорию товара</FormLabel>
                    <SearchCategory />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Цена товара</FormLabel>
                    <Input
                        type={"number"}
                        placeholder={"Цена товара"}
                        value={item.price}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            dispatch(setCreatedItem({ ...item, price: +e.target.value }));
                        }}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Выберите изображение предмета</FormLabel>
                    <FileInput
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            formData.append("image", e.target.files[0]);
                        }}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Свойства товара</FormLabel>
                    <CategoryProperties categoryId={item.categoryId} />
                </FormControl>
                <Button
                    onClick={async (e: MouseEvent<HTMLButtonElement>) => {
                        try {
                            formData.append("categoryId", String(item.categoryId));
                            formData.append("title", item.title);
                            formData.append("price", String(item.price));
                            formData.append("count", String(item.count));
                            await createItem(formData).unwrap();
                            alert("Успешно");
                        } catch (error) {
                            alert(["Ошибка", error]);
                        }
                    }}
                >
                    Создать товар
                </Button>
            </div>
        </>
    );
};

export default CreateItem;
