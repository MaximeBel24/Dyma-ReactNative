import {SafeAreaView} from "react-native-safe-area-context";
import {Animated, StatusBar, StyleSheet, View} from "react-native";
import {colors} from "@/constants/colors";
import SearchSection from "@/screens/home/searchSection/SearchSection";
import ListSection from "@/screens/home/listSection/ListSection";
import NewsSection from "@/screens/home/newsSection/NewsSection";
import {useState} from "react";
import ScrollView = Animated.ScrollView;
import {NavigationProp} from "@react-navigation/core";

interface HomeScreenProps {
    navigation: NavigationProp<any>;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {

    const [inputValue, setInputValue] = useState<string>("");
    const [selectedBrand, setSelectedBrand] = useState<string>("nike");

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View
                style={{ width: "100%", backgroundColor: "#000000"}}
            />
                <ScrollView
                    contentContainerStyle={styles.scrollViewContainer}
                    bounces={false}
                >
                    <SearchSection
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        selectedBrand={selectedBrand}
                        setSelectedBrand={setSelectedBrand}
                    />
                    <ListSection
                        selectedBrand={selectedBrand}
                        inputValue={inputValue}
                        navigation={navigation}
                    />
                    <NewsSection
                        selectedBrand={selectedBrand}
                    />
                </ScrollView>
            <View
                // style={{ width: "100%", backgroundColor: "#000000", flex: 106}}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.LIGHT,
        justifyContent: 'space-between',
    },
    scrollViewContainer: {
        flexGrow: 1,
    }
})