import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "@/store/slices/cartSlice"
import favoritesReducer from "@/store/slices/favoritesSlice"
import notificationsReducer from "@/store/slices/notificationsSlice"
import reactotron from "../../ReactotronConfig";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoritesReducer,
        notifications: notificationsReducer
    },
    enhancers: (getDefaultEnhancers) =>
        getDefaultEnhancers().concat(reactotron.createEnhancer()),
});

export type RootState = ReturnType<typeof store.getState>;