import { Button, FormControl, FormLabel, Heading, Select, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, Fragment, MouseEvent, useCallback, useState } from "react";
import { Helmet } from "react-helmet-async";
import ErrorBlock from "../../components/ErrorBlock";
import Preloader from "../../components/Preloader";
import { useDeleteServiceMutation, useGetAllServicesQuery } from "../../store/services/ServiceAPI";

const DeleteServicePage: FC = () => {
    const { data: services, error, isLoading } = useGetAllServicesQuery();

    const [deleteService] = useDeleteServiceMutation();

    const [isFound, setIsFound] = useState<boolean>(false);

    const [id, setId] = useState<number>(1);

    const handleChangeService = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setId(+e.target.value);
        setIsFound(true);
    }, []);

    const handleDeleteService = async (e: MouseEvent<HTMLButtonElement>) => {
        try {
            await deleteService({ id }).unwrap();
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
                <title>Удаление информации об услуге</title>
            </Helmet>
            <Stack className="border rounded-lg py-3 px-4" gap={2}>
                <Heading as="h2">Удаление информации об услуге</Heading>
                <FormControl isRequired>
                    <FormLabel>Выберите услугу</FormLabel>
                    <Select onChange={handleChangeService}>
                        {services.map((item, index) => (
                            <option value={item.id} key={index}>
                                {item.title}
                            </option>
                        ))}
                    </Select>
                </FormControl>
                {isFound && <Button onClick={handleDeleteService}>Удалить услугу</Button>}
            </Stack>
        </Fragment>
    );
};

export default DeleteServicePage;
