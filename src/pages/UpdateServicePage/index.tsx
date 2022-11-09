import { Button, FormControl, FormLabel, Heading, Select, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, Fragment, useCallback, useState, MouseEvent } from "react";
import { Helmet } from "react-helmet-async";
import ErrorBlock from "../../components/ErrorBlock";
import FormInput from "../../components/FormInput";
import FormTextArea from "../../components/FormTextArea";
import Preloader from "../../components/Preloader";
import UploadImage from "../../components/UploadImage";

import { useGetAllServicesQuery, useUpdateServiceMutation } from "../../store/services/ServiceAPI";

const UpdateServicePage: FC = () => {
    const { data: services, error, isLoading } = useGetAllServicesQuery();

    const [updateService] = useUpdateServiceMutation();

    const [isFound, setIsFound] = useState<boolean>(false);

    const [id, setId] = useState<number>(1);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<string>("");

    const handleChangeService = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setId(services.find((item) => item.title === e.target.value).id);
        setTitle(services.find((item) => item.title === e.target.value).title);
        setDescription(services.find((item) => item.title === e.target.value).description);
        setImage(services.find((item) => item.title === e.target.value).image);
        setIsFound(true);
    }, []);

    const handleChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }, []);
    const handleChangeDescription = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }, []);

    const handleUpdateService = async (e: MouseEvent<HTMLButtonElement>) => {
        try {
            await updateService({ id, title, description, image }).unwrap();
            setImage("");
            setTitle("");
            setDescription("");
            setImage("");
            setIsFound(false);
            alert("Успешно");
        } catch (error) {
            alert("Ошибка");
            console.warn(error);
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
                <title>Обновление информации о услуге</title>
            </Helmet>
            <Stack gap={4} className="border rounded-lg px-5 py-3">
                <Heading as="h2">Обновление информации о услуге</Heading>
                <FormControl isRequired>
                    <FormLabel>Выберите услугу</FormLabel>
                    <Select onChange={handleChangeService}>
                        {services.map((item, index) => (
                            <option value={item.title} key={index}>
                                {item.title}
                            </option>
                        ))}
                    </Select>
                </FormControl>
                {isFound && (
                    <Fragment>
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
                        <Button onClick={handleUpdateService}>Обновить услугу</Button>
                    </Fragment>
                )}
            </Stack>
        </Fragment>
    );
};

export default UpdateServicePage;
