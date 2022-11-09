import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { ICategory, ICreateCategory } from "../../models/categories.model";
import { RootState } from "..";
import { BASE_URL } from "../../utils";
import { ICategoryProperty } from "../../models/item.models";

export const CategoriesAPI = createApi({
    reducerPath: "category",
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    tagTypes: ["Categories"],
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}categories`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token || window.localStorage.getItem("accessToken");
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAllCategories: builder.query<ICategory[], void>({
            query: () => ({
                url: "",
            }),
            providesTags: ["Categories"],
        }),
        getCategoryById: builder.query<ICategory, { id: number }>({
            query: (id) => ({
                url: `/${id}`,
            }),
            providesTags: (result) => [{ type: "Categories", id: result.id }],
        }),
        getPropertiesByCategory: builder.query<ICategoryProperty[], number>({
            query: (id) => ({
                url: `/properties/${id}`,
            }),
        }),
        createCategory: builder.mutation<ICategory, ICreateCategory>({
            query: (dto) => ({
                method: "POST",
                body: dto,
                url: "",
            }),
            invalidatesTags: (result) => [{ type: "Categories", id: result.id }],
        }),
        updateCategory: builder.mutation<ICategory, ICategory>({
            query: (dto) => ({
                method: "PATCH",
                url: "",
                body: dto,
            }),
            invalidatesTags: (result) => [{ type: "Categories", id: result.id }],
        }),
        deleteCategory: builder.mutation<{ id: number }, { id: number }>({
            query: ({ id }) => ({
                method: "DELETE",
                url: `/${id}`,
            }),
            invalidatesTags: (result) => [{ type: "Categories", id: result.id }],
        }),
    }),
});

export const {
    useGetAllCategoriesQuery,
    useGetCategoryByIdQuery,
    useGetPropertiesByCategoryQuery,
    useCreateCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
} = CategoriesAPI;
