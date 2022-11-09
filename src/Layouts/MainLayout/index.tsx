import { FC } from "react";
import { Outlet } from "react-router-dom";
import Categories from "../../components/AdminCategories/Index";
import { Grid, GridItem } from "@chakra-ui/react";

const MainLayout: FC = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-2.5 min-h-full">
            <Grid templateColumns={"3fr 10fr"} minHeight="100%" gap={4}>
                <GridItem>
                    <Categories />
                </GridItem>
                <GridItem className="pb-44">
                    <Outlet />
                </GridItem>
            </Grid>
        </div>
    );
};

export default MainLayout;
