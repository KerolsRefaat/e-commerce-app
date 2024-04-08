import { createSlice } from "@reduxjs/toolkit";

const initialState={allProducts: []};

export const productSlice = createSlice({
    name: "ProductSlice",
    initialState,
    reducers:{
        getProducts(state,action){
            state.allProducts=[action.payload]
        },
    }
})

export const productSliceActions = productSlice.actions;
