import { Spinner, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";

const Preloader: FC = () => {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <Stack gap={2}>
                <Spinner size="xl" />
                <Text>Подождите...Идёт загрузка</Text>
            </Stack>
        </div>
    );
};

export default Preloader;
