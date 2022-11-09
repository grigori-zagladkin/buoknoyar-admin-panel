import { Button, Input } from "@chakra-ui/react";
import { ChangeEvent, FC, Fragment, useCallback, useEffect, useState } from "react";
import { IItemProperties, IPropertyValue } from "../../models/item.models";
import { useGetPropertiesByCategoryQuery } from "../../store/services/CategoriesAPI";
import ErrorBlock from "../ErrorBlock";
import Preloader from "../Preloader";

interface IItemPropertiesProps {
    activeCategory: number;
    set_Properties: (properties: IItemProperties[]) => void;
}

const ItemProperties: FC<IItemPropertiesProps> = ({ activeCategory, set_Properties }) => {
    const { data: _properties, error, isLoading } = useGetPropertiesByCategoryQuery(activeCategory);
    const [properties, setProperties] = useState<IPropertyValue[]>([]);
    const handleChangeSearch = useCallback((e: ChangeEvent<HTMLInputElement>, id: number) => {
        const index = properties.findIndex((property) => property.id === id);
        let __properties = [...properties] as IPropertyValue[];
        __properties[index].value = e.target.value;
        setProperties(__properties);
        set_Properties(
            properties.map((item) => ({
                property: item.property,
                value: item.value,
            }))
        );
    }, []);
    if (error) {
        return <ErrorBlock />;
    } else if (isLoading) {
        return <Preloader />;
    }
    return (
        <Fragment>
            <ul>
                {properties.map((item, index) => (
                    <li key={index} className="flex mt-4 gap-4">
                        <p>{item.property}</p>
                        <Input value={item.value} />
                        <Button>Убрать свойство</Button>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};

export default ItemProperties;
