import { configureStore } from '@reduxjs/toolkit';
import initialReducer from '../features/basic';
import cartReducer from '../features/cartSlice';

const store = configureStore({
    reducer: {
        basicReducer: initialReducer,
        cartReducer: cartReducer
    }
});

export default store;