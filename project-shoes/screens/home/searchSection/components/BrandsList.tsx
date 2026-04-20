import {FlatList, StyleSheet} from "react-native";
import {brands} from "@/data/brands";
import BrandItem from "@/screens/home/searchSection/components/BrandItem";
import ItemSeparator from "@/ui/separators/ItemSeparator";
import {spaces} from "@/constants/spaces";

interface BrandListProps {
    selectedBrand: string;
    setSelectedBrand: (brand: string) => void;
}

export default function BrandsList({selectedBrand, setSelectedBrand }: BrandListProps) {

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={brands}
            bounces={false}
            keyExtractor={(item) => item.name}
            style={styles.listContainer}
            ItemSeparatorComponent={() => <ItemSeparator width={spaces.S}/>}
            renderItem={({ item, index }) => (
                <BrandItem
                    item={item}
                    selectedBrand={selectedBrand}
                    setSelectedBrand={setSelectedBrand}
                    index={index}
                />
            )}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flexGrow: 0
    }
})