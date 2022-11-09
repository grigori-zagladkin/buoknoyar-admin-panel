import { createSlice } from "@reduxjs/toolkit";
import { IServicesState } from "../../models/service.models";

const initialState: IServicesState = {
    services: [],
};

const ServiceSlice = createSlice({
    name: "ServiceSlice",
    initialState,
    reducers: {
        setServices: (state, action) => {
            state.services = action.payload;
        },
    },
});

export const { setServices } = ServiceSlice.actions;

export default ServiceSlice.reducer;
