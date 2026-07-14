import {configureStore} from "@reduxjs/toolkit";
import favoritesReducer from "@/store/slices/favoritesSlice"
import notificationsReducer from "@/store/slices/notificationsSlice"
import reactotron from "../../ReactotronConfig";

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        notifications: notificationsReducer
    },
    enhancers: (getDefaultEnhancers) =>
        getDefaultEnhancers().concat(reactotron.createEnhancer()),
});

export type RootState = ReturnType<typeof store.getState>;