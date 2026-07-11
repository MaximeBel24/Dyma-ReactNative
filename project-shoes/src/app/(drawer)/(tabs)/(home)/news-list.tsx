import { View, StyleSheet, FlatList } from "react-native";
import {colors} from "@/constants/colors";
import {Shoe, shoes} from "@/data/shoes";
import VerticalCard from "@/ui/cards/VerticalCard";
import {spaces} from "@/constants/spaces";
import ItemSeparator from "@/ui/separators/ItemSeparator";
import {router} from "expo-router";

export default function NewsList() {

    const items = shoes
        .map((brand) => brand.stock.find((item) => item.new))
        .filter((item): item is Shoe => !!item);

    const navigateToDetails = (id: string) => router.push({ pathname: "/details/[id]", params: { id } })


    const renderItem = ({ item }: { item: Shoe }) => (
        <View style={styles.cardContainer}>
            <VerticalCard item={item} isListScreen onPress={() => navigateToDetails(item.id)}/>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
                style={styles.container}
                ItemSeparatorComponent={() => <ItemSeparator height={spaces.L}/>}
                contentContainerStyle={styles.contentStyle}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.LIGHT,
        paddingTop: spaces.L
    },
    contentStyle: {
        paddingBottom: spaces.XL,
    },
    cardContainer: {
        flex: 0.5,
        height: 240,
        justifyContent: "center",
        alignItems: "center",
    }
});
