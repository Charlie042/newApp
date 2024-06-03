import { configureStore } from '@reduxjs/toolkit';
import slideReducer from "../features/apiSlice"
import usersReducer from '../features/usersSlice';
import productsReducer from '../features/productsSlice';
import cartReducer from '../features/cartSlice';
import wishlistReducer from "../features/favouriteSlice";

const store = configureStore({
    reducer: {
        slider: slideReducer,
        users: usersReducer,
        products: productsReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
    }
});

export default store;