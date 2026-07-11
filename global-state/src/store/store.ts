import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from "@/store/slices/favoritesSlice"
import reactotron from "../../ReactotronConfig";

// Création du store Redux
export const store = configureStore({ // Initialise Redux

    reducer: { // Contient les états globaux de l'app et les fonctions pour les mettre à jour
        favorites: favoritesReducer
    },

    enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(reactotron.createEnhancer()),

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;