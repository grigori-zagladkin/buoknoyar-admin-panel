import { Button, Heading, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, Fragment, useCallback, useState, MouseEvent } from "react";
import { Helmet } from "react-helmet-async";
import FormInput from "../../components/FormInput";
import UploadImage from "../../components/UploadImage";
import { useCreateCategoryMutation } from "../../store/services/CategoriesAPI";

const CreateCategoryPage: FC = () => {
    const [createCategory] = useCreateCategoryMutation();

    const [category, setCategory] = useState<string>("");
    const [image, setImage] = useState<string>("");

    const handleChangeCategory = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value);
    }, []);

    const handleCreateCategory = async (e: MouseEvent<HTMLButtonElement>) => {
        try {
            await createCategory({
                title: category,
                image,
            }).unwrap();
        } catch (error) {
            console.warn(error);
            alert(error);
        }
    };
    return (
        <Fragment>
            <Helmet>
                <title>Создание категории</title>
            </Helmet>
            <Stack gap={4} className="border rounded-lg px-5 py-3">
                <Heading as="h2">Создание категории</Heading>
                <FormInput
                    type={"text"}
                    value={category}
                    setValue={handleChangeCategory}
                    placeholder={"Название категории"}
                    formLabel={"Название категории"}
                />
                <UploadImage image={image} setImage={setImage} />
                <Button onClick={handleCreateCategory}>Создать категорию</Button>
            </Stack>
        </Fragment>
    );
};

export default CreateCategoryPage;
