import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addProduct: (state, action) => {
            const existingProduct = state.cart.find(
                item => item.id === action.payload.id
            );
            
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: action.payload.quantity
                });
            }
        },
        removeProduct: (state, action) => {
            const existingProduct = state.cart.find(
                item => item.id === action.payload.id
            );
            
            if (existingProduct) {
                if (action.payload.quantity) {
                    
                    existingProduct.quantity -= action.payload.quantity;
                    
                    if (existingProduct.quantity <= 0) {
                        state.cart = state.cart.filter(
                            item => item.id !== action.payload.id
                        );
                    }
                } else {
                    
                    state.cart = state.cart.filter(
                        item => item.id !== action.payload.id
                    );
                }
            }
        },
    },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;