import {shoes} from "@/data/shoes";
import {FlatList, StyleSheet} from "react-native";
import VerticalCard from "@/ui/cards/VerticalCard";
import ItemSeparator from "@/ui/separators/ItemSeparator";
import {spaces} from "@/constants/spaces";
import {useNavigation} from "@react-navigation/native";

interface ShoesListProps {
    selectedBrand: string;
    inputValue: string;
}

export default function ShoesList({ selectedBrand, inputValue }: ShoesListProps) {

    const navigation = useNavigation();

    const data = shoes
        .find((elem) => elem.brand === selectedBrand)
        ?.stock.filter((item) => !item.new) ?? [];

    const filteredData = inputValue
        ? data.filter((elem) =>
            elem.name.toLowerCase().includes(inputValue.toLowerCase())
        ): data;

    const navigateToDetails = (id: string) => navigation.navigate("Details", {id})

    return (
        <FlatList
            data={filteredData}
            renderItem={({ item }) => (
                <VerticalCard item={item} onPress={() => navigateToDetails(item.id)}/>
            )}
            horizontal
            ItemSeparatorComponent={() => <ItemSeparator width={spaces.L} /> }
            contentContainerStyle={styles.listContainer}
            showsHorizontalScrollIndicator={false}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: spaces.L,
    }
});