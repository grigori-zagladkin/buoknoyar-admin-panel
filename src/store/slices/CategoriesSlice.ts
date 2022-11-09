import { createSlice } from "@reduxjs/toolkit";
import { ICategoriesState } from "../../models/categories.model";

const initialState: ICategoriesState = {
    categories: [],
    categoryId: 1
};

const CategoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload;
        },
        setCategoryIdForCreateItem(state, action) {
            state.categoryId = action.payload
        }
    },
});

export const { setCategories, setCategoryIdForCreateItem } = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
