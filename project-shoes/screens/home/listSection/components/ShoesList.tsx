import {shoes} from "@/data/shoes";
import {FlatList, StyleSheet} from "react-native";
import VerticalCard from "@/ui/cards/VerticalCard";
import ItemSeparator from "@/ui/separators/ItemSeparator";
import {spaces} from "@/constants/spaces";

interface ShoesListProps {
    selectedBrand: string;
    inputValue: string;
}

export default function ShoesList({ selectedBrand, inputValue }: ShoesListProps) {

    const data = shoes
        .find((elem) => elem.brand === selectedBrand)
        ?.stock.filter((item) => !item.new) ?? [];

    const filteredData = inputValue
        ? data.filter((elem) =>
            elem.name.toLowerCase().includes(inputValue.toLowerCase())
        ): data;

    return (
        <FlatList
            data={filteredData}
            renderItem={({ item }) => <VerticalCard item={item} />}
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