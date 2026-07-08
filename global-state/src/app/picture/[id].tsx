import { Image, View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { pictures } from "@/data/data";
import {useContext} from "react";
import {FavoritesContext} from "@/context/favoritesContext";

export default function PictureDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const picture = pictures.find((p) => p.id === id);

    // Nouvelle façon de consommer le context
    const favoritesCtx = useContext(FavoritesContext);

    console.log( favoritesCtx );

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
                        <MaterialIcons name="favorite-outline" size={24} color="black" />
                    ),
                }}
            />

            {/*Ancienne façon de consommer le context*/}
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
