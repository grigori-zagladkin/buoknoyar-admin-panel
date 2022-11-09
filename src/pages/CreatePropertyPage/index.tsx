import { Button, Heading, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, useCallback, useState, MouseEvent } from "react";

import DropdownCategory from "../../components/DropdownCategory";
import FormInput from "../../components/FormInput";

const CreatePropertyPage: FC = () => {
    const [categories, setCategories] = useState<number[]>([1, 2, 3]);
    const [property, setProperty] = useState<string>("");
    const handleAddCategory = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let _categories = [...categories, 1];
        setCategories(_categories);
    };
    const handleChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {};
    const handleChangeProperty = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setProperty(e.target.value);
    }, []);
    return (
        <Stack>
            <Heading as="h2">Создание свойства</Heading>
            <FormInput
                placeholder={"Свойство"}
                formLabel={"Свойство"}
                type={"text"}
                value={property}
                setValue={handleChangeProperty}
            />
            {categories.map((item, index) => (
                <DropdownCategory activeCategory={item} setActiveCategory={handleChangeCategory} />
            ))}
            <Button>Добавить категорию</Button>
        </Stack>
    );
};

export default CreatePropertyPage;
