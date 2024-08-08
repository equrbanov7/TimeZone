import {
    configureStore
} from "@reduxjs/toolkit";
import {
    productReducer
} from "./reducers/productReducer";
import {
    categoryReducer
} from "./reducers/categoryReducer";
import {
    userReducer
} from "./reducers/userReducer";
import {
    productAPI
} from "./rtkQuery/productApi";
import {
    setupListeners
} from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoryReducer,
        users: userReducer,
        [productAPI.reducerPath]: productAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productAPI.middleware),
});

setupListeners(store.dispatch);