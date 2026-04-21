import { View, StyleSheet, FlatList } from "react-native";
import {colors} from "@/constants/colors";
import {Shoe, shoes} from "@/data/shoes";
import VerticalCard from "@/ui/cards/VerticalCard";
import {spaces} from "@/constants/spaces";
import ItemSeparator from "@/ui/separators/ItemSeparator";
import {NavigationProp} from "@react-navigation/core";


interface NewsListProps {
    navigation: NavigationProp<any>
}

export default function NewsList({ navigation }: NewsListProps) {

    // On filtre pour ne garder que les éléments qui existent (non undefined)
    const items = shoes
        .map((brand) => brand.stock.find((item) => item.new))
        .filter((item): item is Shoe => !!item);

    const navigateToDetails = (id: string) => navigation.navigate("Details", { id });

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
