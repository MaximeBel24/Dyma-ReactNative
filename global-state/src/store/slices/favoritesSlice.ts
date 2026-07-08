import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface FavoritesState {
    picturesIds: string[];
}

const initialState: FavoritesState = {
    picturesIds: []
}

export const favoritesSlice = createSlice({

    // Nom du slice
    name: "favorites",

    // Valeur inital du slice
    initialState,

    // Objet qui contient les fonctions pour mettre à jour le slice
    reducers: {

        // state : un objet contenant les valeurs du state de ce slice (picturesIds ici)
        // action : un objet qui contient 2 propriété : type et payload, Le payload contient les paramètres qu'on passera aux fonctions des reducers
        addFavorite: (state, action: PayloadAction<string>) => {
            state.picturesIds = [...state.picturesIds, action.payload];
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.picturesIds = state.picturesIds.filter(currentId => currentId !== action.payload)
        },
    }
});

// export du slice
export const { addFavorite, removeFavorite } = favoritesSlice .actions;
export default favoritesSlice.reducer;