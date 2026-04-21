import {View, StyleSheet, FlatList} from "react-native";
import {NavigationProp, RouteProp} from "@react-navigation/core";
import {RootStackParamList} from "@/types/navigation";
import {Shoe, shoes} from "@/data/shoes";
import {SCREEN_HEIGHT} from "@/constants/sizes";
import {spaces} from "@/constants/spaces";
import VerticalCard from "@/ui/cards/VerticalCard";
import ItemSeparator from "@/ui/separators/ItemSeparator";
import {useEffect} from "react";

interface ListProps {
    route: RouteProp<RootStackParamList, "List">
    navigation: NavigationProp<any>
}

export default function List({ route, navigation }: ListProps) {
    const data = shoes.find((elem) => elem.brand === route.params?.brand);

    useEffect(() => {
        navigation.setOptions({
            title: route.params.brand.charAt(0).toUpperCase() + route.params.brand.slice(1),
        })
    })

    const navigateToDetails = (id: string) => navigation.navigate("Details", { id })

    const renderItem= ({ item }: { item: Shoe}) => (
        <View style={styles.cardContainer}>
            <VerticalCard isListScreen item={item} onPress={() => navigateToDetails(item.id)} />
        </View>
    )

    return (
        <View style={styles.container}>
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