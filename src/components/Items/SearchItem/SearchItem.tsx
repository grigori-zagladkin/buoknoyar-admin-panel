import { Box, Input, Spinner, Image } from "@chakra-ui/react";
import { FC, MouseEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useGetAllItemsQuery } from "../../../store/services/ItemsAPI";
import { setItems } from "../../../store/slices/ItemsSlice";

interface IProps {
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

const SearchItem: FC<IProps> = ({ onClick }) => {
    const { data: _items, error, isLoading } = useGetAllItemsQuery();
    useEffect(() => {
        dispatch(setItems(_items));
    }, [_items]);
    const { searchString, items } = useAppSelector((state) => state.items);
    const dispatch = useAppDispatch();
    return (
        <>
            {error && <h1>Ошибка</h1>}
            {isLoading && <Spinner />}
            <Input />
            {searchString && _items.length >= 1 && (
                <div>
                    {items!.map((item, index) => (
                        <div key={index} onClick={onClick}>
                            <Box>
                                <Image src={""} alt="" />
                            </Box>
                            <h4>{item.title}</h4>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default SearchItem;
