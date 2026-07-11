import { View, StyleSheet } from "react-native";
import { spaces } from "@/constants/spaces";
import Banner from "../Banner";
import ShoesList from "@/components/home/listSection/components/ShoesList";
import {router} from "expo-router";

interface ListSectionProps {
    selectedBrand: string;
    inputValue: string;
}

export default function ListSection({ selectedBrand, inputValue }: ListSectionProps) {

    const navigateToList = () => {
        router.push({ pathname: "/list", params: { brand: selectedBrand } });
    }

    return (
        <View style={styles.container}>
            <Banner
                text="Shoes populaires"
                navigate={navigateToList}
            />
            <ShoesList
                selectedBrand={selectedBrand}
                inputValue={inputValue}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 240,
        minHeight: 340,
        paddingVertical: spaces.L,
    },
});
