import {View, StyleSheet, FlatList} from "react-native";
import {Shoe, shoes} from "@/data/shoes";
import {spaces} from "@/constants/spaces";
import VerticalCard from "@/ui/cards/VerticalCard";
import ItemSeparator from "@/ui/separators/ItemSeparator";
import {router} from "expo-router";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import TextBoldL from "@/ui/texts/TextBoldL";
import {colors} from "@/constants/colors";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";

export default function Favorites() {

    const tabBarHeight = useBottomTabBarHeight();
    const favoritesShoesIds = useSelector((state: RootState) => state.favorites.favoritesShoesIds);

    const data = favoritesShoesIds.map((id) =>
        shoes
            .find((item) => item.stock.find((elem) => elem.id === id))?.stock.find((el) => el.id === id))
        .filter((item) => item !== undefined);

    const navigateToDetails = (id: string) => router.push({ pathname: "/details/[id]", params: { id } });

    const renderItem= ({ item }: { item: Shoe}) => (
        <View style={styles.cardContainer}>
            <VerticalCard
                isListScreen
                item={item}
                onPress={() => navigateToDetails(item.id)}
                isFavorite
            />
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ItemSeparatorComponent={() => <ItemSeparator height={spaces.L} />}
                contentContainerStyle={{ paddingBottom: tabBarHeight, flexGrow: 1}}
                ListEmptyComponent={
                    <View style={styles.emptyListContainer}>
                        <TextBoldL>
                            Vous n'avez pas encore de favoris
                        </TextBoldL>
                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    emptyListContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.LIGHT
    },
    container: {
        flex: 1,
        paddingVertical: spaces.L,
        backgroundColor: colors.LIGHT
    },
    cardContainer: {
        flex: 1,
        height: 240,
        justifyContent: "center",
        alignItems: "center",
    }
})