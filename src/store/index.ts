import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { AuthAPI } from "./services/AuthAPI";
import { CategoriesAPI } from "./services/CategoriesAPI";
import { ItemsAPI } from "./services/ItemsAPI";
import { ServiceAPI } from "./services/ServiceAPI";
import AuthSlice from "./slices/AuthSlice";
import CategoriesSlice from "./slices/CategoriesSlice";
import ItemsSlice from "./slices/ItemsSlice";
import ServiceSlice from "./slices/ServiceSlice";
import { PropertiesAPI } from "./services/PropertiesAPI";

const rootReducer = combineReducers({
    auth: AuthSlice,
    [CategoriesAPI.reducerPath]: CategoriesAPI.reducer,
    categories: CategoriesSlice,
    [ServiceAPI.reducerPath]: ServiceAPI.reducer,
    [AuthAPI.reducerPath]: AuthAPI.reducer,
    [ItemsAPI.reducerPath]: ItemsAPI.reducer,
    items: ItemsSlice,
    services: ServiceSlice,
    [PropertiesAPI.reducerPath]: PropertiesAPI.reducer,
});

const middlewares = [
    CategoriesAPI.middleware,
    ServiceAPI.middleware,
    AuthAPI.middleware,
    ItemsAPI.middleware,
    PropertiesAPI.middleware,
];

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
    });
};

setupListeners(setupStore().dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
