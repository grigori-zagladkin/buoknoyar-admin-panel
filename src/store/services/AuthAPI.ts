import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ILoginRequest, IServerResponse } from "../../models/auth.models";
import { RootState } from "..";
import { BASE_URL } from "../../utils";

export const AuthAPI = createApi({
    reducerPath: "AuthAPI",
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    tagTypes: ["Auth"],
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}auth`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token || window.localStorage.getItem("token");
            if (token) {
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation<IServerResponse, ILoginRequest>({
            query: (creadentials) => ({
                url: "/login",
                method: "POST",
                body: creadentials,
            }),
        }),
    }),
});

export const { useLoginMutation } = AuthAPI;
