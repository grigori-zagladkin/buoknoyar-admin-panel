import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICreateItem, IItem, ISearch } from "../../models/item.models";
import { RootState } from "..";
import { BASE_URL } from "../../utils";

export const ItemsAPI = createApi({
    reducerPath: "item",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}items`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token || window.localStorage.getItem("accessToken");
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    tagTypes: ["Items"],
    endpoints: (builder) => ({
        getAllItems: builder.query<IItem[], ISearch>({
            query: ({ categoryId, title, page, orderBy, limit }) => ({
                url: `?categoryid=${categoryId}&title=${title}&limit=10&orderBy=${orderBy}&page=1`,
            }),
            providesTags: ["Items"],
        }),
        getItemById: builder.query<IItem, number>({
            query: (id) => ({
                url: `/${id}`,
            }),
            providesTags: (result) => [{ type: "Items", id: result.id }],
        }),
        createItem: builder.mutation<IItem, ICreateItem>({
            query: (dto) => ({
                url: ``,
                method: "POST",
                body: dto,
            }),
            invalidatesTags: (result) => [{ type: "Items", id: result.id }],
        }),
        updateItem: builder.mutation<IItem, IItem>({
            query: (dto) => ({
                url: ``,
                method: "PATCH",
                body: dto,
            }),
            invalidatesTags: (result) => [{ type: "Items", id: result.id }],
        }),
        deleteItem: builder.mutation<{ id: number }, number>({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (result) => [{ type: "Items", id: result.id }],
        }),
    }),
});

export const {
    useGetAllItemsQuery,
    useGetItemByIdQuery,
    useCreateItemMutation,
    useUpdateItemMutation,
    useDeleteItemMutation,
    useLazyGetAllItemsQuery,
} = ItemsAPI;
