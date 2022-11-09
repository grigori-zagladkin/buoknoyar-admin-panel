import { Button, Heading, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, Fragment, MouseEvent, useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";

import DropdownCategory from "../../components/DropdownCategory";
import ErrorBlock from "../../components/ErrorBlock";
import FormInput from "../../components/FormInput";
import Preloader from "../../components/Preloader";
import UploadImage from "../../components/UploadImage";
import { useGetAllCategoriesQuery, useUpdateCategoryMutation } from "../../store/services/CategoriesAPI";

const UpdateCategoryPage: FC = () => {
    const { data: _categories, error, isLoading } = useGetAllCategoriesQuery();

    const [updateCategory] = useUpdateCategoryMutation();

    const [id, setId] = useState<number>(1);
    const [title, setTitle] = useState<string>("");
    const [image, setImage] = useState<string>("");

    const [isFound, setIsFound] = useState<boolean>(false);

    const handleChangeCategory = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setId(+e.target.value);
        setTitle(_categories.find((item) => item.id === +e.target.value).title);
        setImage(_categories.find((item) => item.id === +e.target.value)?.image);
        setIsFound(true);
    }, []);

    const handleChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }, []);

    const handleUpdateCategory = async (e: MouseEvent<HTMLButtonElement>) => {
        try {
            await updateCategory({ id, title, image }).unwrap();
            alert("Успешно");
        } catch (error) {
            console.warn(error);
            alert("Ошибка");
        }
    };

    if (error) {
        return <ErrorBlock />;
    } else if (isLoading) {
        return <Preloader />;
    }
    return (
        <Fragment>
            <Helmet>
                <title>Обновление категории</title>
            </Helmet>
            <Stack className="border rounded-lg px-5 py-3">
                <Heading as={"h2"}>Обновление категории</Heading>
                <DropdownCategory setActiveCategory={handleChangeCategory} activeCategory={id} />
                {isFound && (
                    <Fragment>
                        <FormInput
                            setValue={handleChangeTitle}
                            value={title}
                            placeholder="Название категории"
                            type={"text"}
                            formLabel="Название категории"
                        />
                        <UploadImage image={image} setImage={setImage} />
                        <Button onClick={handleUpdateCategory}>Обновить категорию</Button>
                    </Fragment>
                )}
            </Stack>
        </Fragment>
    );
};

export default UpdateCategoryPage;
