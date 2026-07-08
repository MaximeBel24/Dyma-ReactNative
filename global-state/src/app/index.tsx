import { FlatList, Pressable, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { pictures } from "@/data/data";

export default function Index() {
  return (
      <FlatList
          data={pictures}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
              <Link href={{ pathname: "/picture/[id]", params: { id: item.id } }} asChild>
                <Pressable style={styles.item}>
                  <Image source={{ uri: item.url }} style={styles.image} />
                </Pressable>
              </Link>
          )}
      />
  );
}

const styles = StyleSheet.create({
  item: { flex: 1, aspectRatio: 1, margin: 4 },
  image: { flex: 1, borderRadius: 8 },
});