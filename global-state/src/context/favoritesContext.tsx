import React, {createContext, useState} from "react";

interface FavoritesContextType {
    picturesIds: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
}

// Créer le context
export const FavoritesContext = createContext<FavoritesContextType>({
    picturesIds: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

interface FavoritesProviderProps {
    children: React.ReactNode;
}

export default function FavoritesContextProvider({children}: FavoritesProviderProps) {

    // Définition des valeurs du context

    const [picturesIds, setPictureIds] = useState<string[]>([]);

    const addFavorite = (id: string) => {
        setPictureIds((currentIds) => [...currentIds, id]);
    }

    const removeFavorite = (id: string) => {
        setPictureIds((currentIds) => currentIds.filter(currentId => currentId !== id));
    }

    const value = {
        picturesIds,
        addFavorite,
        removeFavorite,
    }

    return (
        // Injection des valeurs du context
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}