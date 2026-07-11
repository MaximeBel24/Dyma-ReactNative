import {View, StyleSheet, FlatList} from "react-native";
import {Shoe, shoes} from "@/data/shoes";
import {SCREEN_HEIGHT} from "@/constants/sizes";
import {spaces} from "@/constants/spaces";
import VerticalCard from "@/ui/cards/VerticalCard";
import ItemSeparator from "@/ui/separators/ItemSeparator";
import {router, Stack, useLocalSearchParams} from "expo-router";

export default function List() {

    const { brand } = useLocalSearchParams<{ brand: string }>()

    const data = shoes.find((elem) => elem.brand === brand);

    const navigateToDetails = (id: string) => router.push({ pathname: "/details/[id]", params: { id } });

    const renderItem= ({ item }: { item: Shoe}) => (
        <View style={styles.cardContainer}>
            <VerticalCard isListScreen item={item} onPress={() => navigateToDetails(item.id)} />
        </View>
    )

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: brand.charAt(0).toUpperCase() + brand.slice(1) }} />
            <FlatList
                data={data?.stock}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ItemSeparatorComponent={() => <ItemSeparator height={spaces.L} />}
                contentContainerStyle={styles.contentStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT,
        paddingVertical: spaces.L,
        paddingBottom: 106,
    },
    contentStyle: {
        paddingBottom: spaces.XL,
    },
    cardContainer: {
        flex: 1,
        height: 240,
        justifyContent: "center",
        alignItems: "center",
    }
})