import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const Categories: FC = () => {
    return (
        <aside className="border-r min-h-full flex flex-col">
            <Button className="mb-5 inline-flex mr-5" leftIcon={<ArrowForwardIcon />}>
                <NavLink to={"/"}>На главную</NavLink>
            </Button>
            <ul>
                <li className="text-xl font-bold mb-4">Товары</li>
                <ul>
                    <li>
                        <NavLink to={"/"} className="hover:bg-slate-100 text-lg rounded-lg px-4 py-2.5 block mb-1">
                            Создать товар
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/items/update"}
                            className="hover:bg-slate-100 text-lg rounded-lg px-4 py-2.5 block mb-1"
                        >
                            Обновить товар
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/items/delete"}
                            className="hover:bg-slate-100 text-lg rounded-lg px-4 py-2.5 block mb-1"
                        >
                            Удалить товар
                        </NavLink>
                    </li>
                </ul>
                <li className="text-xl font-bold mb-4">Категории</li>
                <ul>
                    <li>
                        <NavLink
                            to={"/categories/create"}
                            className="hover:bg-slate-100 text-lg rounded-lg px-4 py-2.5 block mb-1"
                        >
                            Создать категорию
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/categories/update"}
                            className="hover:bg-slate-100 text-lg rounded-lg px-4 py-2.5 block mb-1"
                        >
                            Обновить категорию
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/categories/delete"}
                            className="hover:bg-slate-100 text-lg rounded-lg px-4 py-2.5 block mb-1"
                        >
                            Удалить категорию
                        </NavLink>
                    </li>
                </ul>
                <li className="text-xl font-bold mb-4">Услуги</li>
                <ul>
                    <li>
                        <NavLink
                            to={"/services/create"}
                            className="hover:bg-slate-100 text-lg rounded-lg px-4 py-2.5 block mb-1"
                        >
                            Создать услугу
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/services/update"}
                            className="hover:bg-slate-100 text-lg rounded-lg px-4 py-2.5 block mb-1"
                        >
                            Обновить услугу
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/services/delete"}
                            className="hover:bg-slate-100 text-lg rounded-lg px-4 py-2.5 block mb-1"
                        >
                            Удалить услугу
                        </NavLink>
                    </li>
                </ul>
                <li className="text-xl font-bold mb-4">Свойства товаров</li>
                <ul>
                    <li>
                        <NavLink
                            to={"/properties/create"}
                            className="hover:bg-slate-100 text-lg rounded-lg px-4 py-2.5 block mb-1"
                        >
                            Создать свойство
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/properties/update"}
                            className="hover:bg-slate-100 text-lg rounded-lg px-4 py-2.5 block mb-1"
                        >
                            Обновить свойство
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/properties/delete"}
                            className="hover:bg-slate-100 text-lg rounded-lg px-4 py-2.5 block mb-1"
                        >
                            Удалить свойство
                        </NavLink>
                    </li>
                </ul>
            </ul>
        </aside>
    );
};

export default Categories;
