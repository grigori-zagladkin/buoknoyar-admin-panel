import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { Helmet } from "react-helmet-async";
import CreateItem from "./CreateItem";
import DeleteItem from "./DeleteItem";
import UpdateItem from "./UpdateItem";

const ItemsPage: FC = () => {
    return (
        <>
            <Helmet>
                <title>Редактирование товаров</title>
            </Helmet>
            <Stack>
                <h2 className={"text-2xl font-bold mb-5"}>Редактирование товаров</h2>
                <CreateItem />
                {/* <UpdateItem />
                <DeleteItem /> */}
            </Stack>
        </>
    );
};

export default ItemsPage;
