import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IItemAttributeValue } from "../../models/item.models";
import { BASE_URL } from "../../utils";

export const PropertiesAPI = createApi({
    reducerPath: "properties",
    refetchOnReconnect: true,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    tagTypes: ["Properties"],
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}properties`,
    }),
    endpoints: (builder) => ({
        getPropertiesByCategory: builder.query<IItemAttributeValue[], number>({
            query: (id) => ({
                url: `/${id}`,
            }),
            providesTags: ["Properties"],
        }),
    }),
});

export const { useGetPropertiesByCategoryQuery } = PropertiesAPI;
