import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import createSagaMiddleware from "redux-saga"
import manageProductMiddleware from "../saga/manageProductMiddleware";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        products: productSlice.reducer,
      },
      middleware:()=> [sagaMiddleware],
});

sagaMiddleware.run(manageProductMiddleware)
export default store;
