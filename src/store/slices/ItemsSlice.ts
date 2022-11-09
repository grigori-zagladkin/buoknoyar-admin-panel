import { createSlice } from "@reduxjs/toolkit";
import { IItemState, orderBy } from "../../models/item.models";

const initialState: IItemState = {
    items: [],
    createdItem: {
        title: "",
        count: 0,
        price: 0,
        categoryId: 0,
        properties: [],
        image: "",
    },
    searchString: {
        page: 1,
        limit: 30,
        orderBy: orderBy.asc,
        title: "",
        categoryId: 1,
    },
};

const ServiceSlice = createSlice({
    name: "serviceSlice",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        setCategoryId: (state, action) => {
            state.searchString.categoryId = action.payload;
        },
        setCreatedItem: (state, action) => {
            state.createdItem = action.payload;
        },
        setTitle: (state, action) => {
            state.searchString.title = action.payload;
        },
    },
});

export const { setItems, setCategoryId, setCreatedItem, setTitle } = ServiceSlice.actions;

export default ServiceSlice.reducer;
