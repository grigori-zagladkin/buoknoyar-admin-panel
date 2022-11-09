import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface IAuthState {
    token: string | null;
    user: string | null;
}

const initialState: IAuthState = {
    token: null,
    user: null,
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials(state, action) {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
    },
});

export const selectCurrentUser = (state: RootState) => state.auth.user;

export const { setCredentials } = AuthSlice.actions;

export default AuthSlice.reducer;
