import { Button, Heading, Stack } from "@chakra-ui/react";
import { FC, Fragment, useState, MouseEvent, useCallback, ChangeEvent } from "react";
import { Helmet } from "react-helmet-async";
import DropdownCategory from "../../components/DropdownCategory";
import { useDeleteCategoryMutation } from "../../store/services/CategoriesAPI";

const DeleteCategoryPage: FC = () => {
    const [deleteCategory] = useDeleteCategoryMutation();

    const [id, setId] = useState<number>(1);

    const [isFound, setIsFound] = useState<boolean>(false);

    const handleChangeCategory = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setId(+e.target.value);
        setIsFound(true);
    }, []);

    const handleDeleteCategory = async (e: MouseEvent<HTMLButtonElement>) => {
        try {
            await deleteCategory({ id }).unwrap();
            alert("Успешно");
        } catch (error) {
            console.warn(error);
            alert("Ошибка");
        }
    };
    return (
        <Fragment>
            <Helmet>
                <title>Удаление категории</title>
            </Helmet>
            <Stack className="border rounded-lg px-5 py-3">
                <Heading as="h2">Удаление категории</Heading>
                <DropdownCategory setActiveCategory={handleChangeCategory} activeCategory={id} />
                {isFound && (
                    <Fragment>
                        <Button onClick={handleDeleteCategory}>Удалить категорию</Button>
                    </Fragment>
                )}
            </Stack>
        </Fragment>
    );
};

export default DeleteCategoryPage;
