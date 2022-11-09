import { Spinner } from "@chakra-ui/react";
import { FC } from "react";
import { useGetPropertiesByCategoryQuery } from "../../../store/services/PropertiesAPI";

interface IItemProperties {
    itemId: number;
}

const ItemProperties: FC<IItemProperties> = ({ itemId }) => {
    const { data: properties, error, isLoading } = useGetPropertiesByCategoryQuery(itemId);
    return (
        <>
            {isLoading && <Spinner size="xl" />}
            {error && <h1>Ошибка</h1>}
        </>
    );
};

const UpdateItem: FC = () => {
    return <div>Обновление товара</div>;
};

export default UpdateItem;
