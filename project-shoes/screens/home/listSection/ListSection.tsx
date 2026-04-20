import { View, StyleSheet } from "react-native";
import { spaces } from "@/constants/spaces";
import Banner from "../components/Banner";
import ShoesList from "./components/ShoesList";
import {NavigationProp} from "@react-navigation/core";

interface ListSectionProps {
    selectedBrand: string;
    inputValue: string;
    navigation: NavigationProp<any>;
}

export default function ListSection({ selectedBrand, inputValue, navigation }: ListSectionProps) {

    const navigateToList = () => {
        navigation.navigate("List", { brand: selectedBrand });
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
