import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../hooks/redux";
import { ILoginRequest } from "../../models/auth.models";
import { useLoginMutation } from "../../store/services/AuthAPI";
import { setCredentials } from "../../store/slices/AuthSlice";

const LoginPage: FC = () => {
    const [login] = useLoginMutation();

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const [form, setForm] = useState<ILoginRequest>({
        login: "",
        password: "",
    });
    const handldeChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, login: e.target.value });
    };
    const handldeChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, password: e.target.value });
    };
    const handleSubmitForm = async (e: MouseEvent<HTMLButtonElement>) => {
        try {
            const token = (await login(form).unwrap()).token;
            window.localStorage.setItem("accessToken", token);
            dispatch(setCredentials({ user: form.login, token }));
            navigate("/");
            alert("Успешная авторизация");
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <Stack className="border text-xl rounded-lg p-8" gap={4}>
                <h2 className="text-3xl font-bold text-center">Авторизация</h2>
                <FormControl isRequired>
                    <FormLabel>Логин</FormLabel>
                    <Input placeholder="Логин" value={form.login} onChange={handldeChangeLogin} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Пароль</FormLabel>
                    <Input type="password" placeholder="" value={form.password} onChange={handldeChangePassword} />
                </FormControl>
                <Button onClick={handleSubmitForm}>Войти</Button>
            </Stack>
        </div>
    );
};

export default LoginPage;
