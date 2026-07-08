import {FlatList, Pressable, Image, StyleSheet, ListRenderItem} from "react-native";
import { Link } from "expo-router";
import {Picture, pictures} from "@/data/data";
import {useContext} from "react";
import {FavoritesContext} from "@/context/favoritesContext";
import {MaterialIcons} from "@expo/vector-icons";

export default function Index() {

    const favoritesCtx = useContext(FavoritesContext);

    const renderItem: ListRenderItem<Picture> = ({ item }) => {

        // Vérifie si l'id de chaque item se trouve dans le tableau picturesIds du Context
        const isFavorite = favoritesCtx.picturesIds.includes(item.id);

        return (
            <Link href={{ pathname: "/picture/[id]", params: { id: item.id } }} asChild>
                <Pressable style={styles.item}>
                    <Image source={{ uri: item.url }} style={styles.image} />
                    {/* Icon favorite apparait sur l'image si l'id de l'item est dans picturesIds */}
                    { isFavorite ? <MaterialIcons name={"favorite"} size={32} color={"red"} style={styles.favoriteIcon}/> : null }
                </Pressable>
            </Link>
        )
    }

  return (
      <FlatList
          data={pictures}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={renderItem}
      />
  );
}

const styles = StyleSheet.create({
  item: {
      flex: 1,
      aspectRatio: 1,
      margin: 4
  },
  image: {
      flex: 1,
      borderRadius: 8
  },
  favoriteIcon: {
      position: 'absolute',
      bottom: 20,
      right: 20,
  }
});