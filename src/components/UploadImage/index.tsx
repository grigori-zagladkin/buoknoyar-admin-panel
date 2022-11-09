import { Box, Button, FormControl, FormLabel, Image, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, useState, MouseEvent, useRef } from "react";

import { BASE_URL, instance } from "../../utils";

interface IUploadProps {
    setImage: (str: string) => void;
    image: string;
}

const UploadImage: FC<IUploadProps> = ({ setImage, image }) => {
    const fileInputRef = useRef<HTMLInputElement>();
    const handleUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
        try {
            const formData = new FormData();
            const file = e.target.files[0];
            formData.append("image", file);
            const { data } = await instance.post(BASE_URL + "files/upload", formData);
            setImage(data);
        } catch (error) {
            console.warn(error);
            alert("Ошибка при загрузке файла");
        }
    };
    const handleClickRemove = async (e: MouseEvent<HTMLButtonElement>) => {
        try {
            e.preventDefault();
            await instance.delete(BASE_URL + "files/" + image);
            setImage("");
        } catch (error) {
            console.warn(error);
            alert("Произошла ошибка при удалении файла");
        }
    };
    return (
        <div>
            <FormControl isRequired>
                <FormLabel>Добавьте изображение</FormLabel>
                <Button onClick={() => fileInputRef.current.click()}>Загрузить</Button>
                <input type={"file"} ref={fileInputRef} onChange={handleUploadImage} hidden />
            </FormControl>
            {image && (
                <Box boxSize={"sm"} className="mt-5">
                    <Image src={`${BASE_URL + image}`} alt={"upload image"} />
                </Box>
            )}
            {image && (
                <Stack>
                    <Button onClick={handleClickRemove}>Удалить картинку</Button>
                    <div>{image}</div>
                </Stack>
            )}
        </div>
    );
};

export default UploadImage;
