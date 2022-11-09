import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICreateService, IService } from "../../models/service.models";
import { RootState } from "..";
import { BASE_URL } from "../../utils";

export const ServiceAPI = createApi({
    reducerPath: "service",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}services`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token || window.localStorage.getItem("accessToken");
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
    tagTypes: ["Service"],
    endpoints: (builder) => ({
        getAllServices: builder.query<IService[], void>({
            query: () => ({
                url: "",
            }),
            providesTags: ["Service"],
        }),
        getServiceById: builder.query<IService, number>({
            query: (id) => ({
                url: `/${id}`,
            }),
            providesTags: (result) => [{ type: "Service", id: result.id }],
        }),
        createService: builder.mutation<IService, ICreateService>({
            query: (dto) => ({
                method: "POST",
                url: ``,
                body: dto,
            }),
            invalidatesTags: (result) => [{ type: "Service", id: result.id }],
        }),
        updateService: builder.mutation<IService, IService>({
            query: (dto) => ({
                url: ``,
                method: "PATCH",
                body: dto,
            }),
            invalidatesTags: (result) => [{ type: "Service", id: result.id }],
        }),
        deleteService: builder.mutation<{ id: number }, { id: number }>({
            query: ({ id }) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (result) => [{ type: "Service", id: result.id }],
        }),
    }),
});

export const {
    useGetAllServicesQuery,
    useGetServiceByIdQuery,
    useCreateServiceMutation,
    useUpdateServiceMutation,
    useDeleteServiceMutation,
} = ServiceAPI;
