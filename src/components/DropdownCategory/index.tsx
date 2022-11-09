import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { ChangeEvent, FC, useState } from "react";
import { useGetAllCategoriesQuery } from "../../store/services/CategoriesAPI";
import ErrorBlock from "../ErrorBlock";
import Preloader from "../Preloader";

interface IDropdownCategoryProps {
    activeCategory: number;
    setActiveCategory: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownCategory: FC<IDropdownCategoryProps> = ({ activeCategory, setActiveCategory }) => {
    const { data: _categories, error, isLoading } = useGetAllCategoriesQuery();
    if (error) {
        return <ErrorBlock />;
    } else if (isLoading) {
        return <Preloader />;
    }
    return (
        <FormControl isRequired>
            <FormLabel>Выберите категорию</FormLabel>
            <Select value={activeCategory} onChange={setActiveCategory} size="lg" placeholder="Выберите категорию">
                {_categories.map((item, index) => (
                    <option value={item.id} key={index}>
                        {item.title}
                    </option>
                ))}
            </Select>
        </FormControl>
    );
};

export default DropdownCategory;
