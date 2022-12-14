import { Button, FormControl, Heading, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, MouseEvent, useCallback, useState } from "react";
import DropdownCategory from "../../components/DropdownCategory";
import FormInput from "../../components/FormInput";
import FormTextArea from "../../components/FormTextArea";
import ItemProperties from "../../components/ItemProperties";
import UploadImage from "../../components/UploadImage";
import { IItemProperties } from "../../models/item.models";
import { useCreateItemMutation } from "../../store/services/ItemsAPI";

const CreateItemPage: FC = () => {
    const [createItem] = useCreateItemMutation();
    const [title, setTitle] = useState<string>("");
    const handleChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }, []);
    const [count, setCount] = useState<number>(1);
    const handleChangeCount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setCount(+e.target.value);
    }, []);
    const [price, setPrice] = useState<number>(1);
    const handleChangePrice = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPrice(+e.target.value);
    }, []);
    const [description, setDescription] = useState<string>("");
    const handleChangeDescription = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }, []);
    const [image, setImage] = useState<string>("");
    const [category, setCategory] = useState<number>(1);
    const handleChangeCategory = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setCategory(+e.target.value);
    }, []);
    const [properties, setProperties] = useState<IItemProperties[]>([]);
    const handleCreateItem = async (e: MouseEvent<HTMLButtonElement>) => {
        try {
            await createItem({
                title,
                count,
                price,
                image,
                categoryId: category,
                description,
                properties,
            }).unwrap();
            alert("??????????????");
        } catch (error) {
            alert("????????????");
            console.warn(error);
        }
    };
    return (
        <Stack className="border rounded-lg p-3" gap={3}>
            <Heading as="h2">???????????????? ????????????</Heading>
            <DropdownCategory activeCategory={category} setActiveCategory={handleChangeCategory} />
            <FormInput
                setValue={handleChangeTitle}
                type={"text"}
                value={title}
                formLabel={"???????????????? ????????????"}
                placeholder="???????????????? ????????????"
            />
            <FormInput
                setValue={handleChangeCount}
                type={"number"}
                value={count}
                formLabel={"???????????????????? ????????????"}
                placeholder="???????????????????? ????????????"
            />
            <FormInput
                setValue={handleChangePrice}
                type={"number"}
                value={price}
                formLabel={"???????? ????????????"}
                placeholder="???????? ????????????"
            />
            <FormTextArea
                formLabel="????????????????"
                placeHolder="????????????????"
                value={description}
                setValue={handleChangeDescription}
            />
            <ItemProperties activeCategory={category} set_Properties={setProperties} />
            <UploadImage image={image} setImage={setImage} />
            <Button onClick={handleCreateItem}>?????????????? ??????????</Button>
        </Stack>
    );
};

export default CreateItemPage;
