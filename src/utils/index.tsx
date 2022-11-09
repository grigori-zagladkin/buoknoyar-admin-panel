import axios from "axios";

export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const instance = axios.create({
    headers: {
        authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
    },
});
