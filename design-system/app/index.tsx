import {StyleSheet, View, FlatList} from "react-native";
import {useFonts} from "expo-font";
import {padding} from "@/constants/padding";
import {data} from "../data/index"
import ItemCard from "@/components/ItemCard";
import ListItemSeparator from "@/components/ListItemSeparator";


const CARD_PADDING = 10;

export default function Index() {

    const [fontLoaded] = useFonts({
        "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
        "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    })

    // if (!fontLoaded) return null;
    console.log({fontLoaded});

  return fontLoaded ? (
    <View style={styles.container}>
        <FlatList
            style={styles.listContainer}
            ItemSeparatorComponent={ListItemSeparator}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={
            ({item}) => (
                <ItemCard
                    title={item.title}
                    color={item.color}
                    Logo={item.logo}
                    descritpion={item.description}
                />
            )}
        />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: padding.HORIZONTAL_SCREEN,
    },
    listContainer: {
        width: "100%",
        paddingHorizontal: padding.HORIZONTAL_SCREEN,
        marginTop: 8
    }
})