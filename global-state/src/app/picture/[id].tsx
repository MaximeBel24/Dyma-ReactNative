import { Image, View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { pictures } from "@/data/data";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {addFavorite, removeFavorite} from "@/store/slices/favoritesSlice";

export default function PictureDetails() {

    const { id } = useLocalSearchParams<{ id: string }>();
    const picture = pictures.find((p) => p.id === id);

    // Nouvelle façon de consommer le context (REACT CONTEXT)
    // const favoritesCtx = useContext(FavoritesContext);

    // Savoir si l'élément est dans le tableau picturesIds (REACT CONTEXT)
    // const isFavorite: boolean = favoritesCtx.picturesIds.includes(id);



    // Ajout / retrait d'un élément (REACT CONTEXT)
    // const toggleFavoriteStatus = () => {
    //     if (!isFavorite) {
    //         favoritesCtx.addFavorite(id);
    //     } else {
    //         favoritesCtx.removeFavorite(id);
    //     }
    // }


    // hook useDispatch pour accéder aux actions (fonctions de reducers) et les dispatcher dans le store
    const dispatch = useDispatch();

    // hook Selector pour accéder aux données du store. state contient toute les slices déclarer dans le reducer du store
    const favoritesIds = useSelector((state: RootState) => state.favorites.picturesIds);
    const isFavorite = favoritesIds.includes(id);

    const toggleFavoriteStatus = () => {
        if (!isFavorite) {
            // action du store
            dispatch(addFavorite(id));
        } else {
            // action du store
            dispatch(removeFavorite(id));
        }
    }

    if (!picture) {
        return (
            <View style={styles.container}>
                <Text>Image introuvable</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerRight: () => (
                        <MaterialIcons
                             // Modifie l'icon du header en fonction de isFavorite
                            name={!isFavorite ? "favorite-outline" : "favorite"}
                            size={24}
                            color={"red"}
                            onPress={toggleFavoriteStatus}
                        />
                    ),
                }}
            />

            {/*  Ancienne façon de consommer le context  */}

            {/*<FavoritesContext.Consumer>*/}
            {/*    {(ctx) => {*/}
            {/*        console.log(ctx);*/}
            {/*        return <Image source={{ uri: picture.url }} style={styles.image} />*/}
            {/*    }}*/}
            {/*</FavoritesContext.Consumer>*/}

            <Image source={{ uri: picture.url }} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    image: { flex: 1 },
});
