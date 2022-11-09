import { Button, Heading, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, Fragment, MouseEvent, useCallback, useState } from "react";
import { Helmet } from "react-helmet-async";
import FormInput from "../../components/FormInput";
import FormTextArea from "../../components/FormTextArea";
import UploadImage from "../../components/UploadImage";
import { useCreateServiceMutation } from "../../store/services/ServiceAPI";

const CreateServicePage: FC = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<string>("");

    const [createService] = useCreateServiceMutation();

    const handleChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }, []);
    const handleChangeDescription = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }, []);

    const handleCreateService = async (e: MouseEvent<HTMLButtonElement>) => {
        try {
            await createService({ title, description, image }).unwrap();
            alert("Успешно");
        } catch (error) {
            alert("Ошибка");
            console.warn(error);
        }
    };
    return (
        <Fragment>
            <Helmet>
                <title>Создание услуги</title>
            </Helmet>
            <Stack gap={4} className="border rounded-lg px-5 py-3">
                <Heading as="h2">Создание услуги</Heading>
                <FormInput
                    type="text"
                    setValue={handleChangeTitle}
                    value={title}
                    placeholder="Название услуги"
                    formLabel="Название услуги"
                />
                <FormTextArea
                    setValue={handleChangeDescription}
                    value={description}
                    placeHolder="Описание услуги"
                    formLabel="Описание услуги"
                />
                <UploadImage image={image} setImage={setImage} />
                <Button onClick={handleCreateService}>Создать услугу</Button>
            </Stack>
        </Fragment>
    );
};

export default CreateServicePage;
