import {SafeAreaView} from "react-native-safe-area-context";
import {Animated, StyleSheet} from "react-native";
import {colors} from "@/constants/colors";
import SearchSection from "@/components/home/searchSection/SearchSection";
import ListSection from "@/components/home/listSection/ListSection";
import NewsSection from "@/components/home/newsSection/NewsSection";
import {useState} from "react";
import ScrollView = Animated.ScrollView;
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";

export default function HomeScreen() {

    const [inputValue, setInputValue] = useState<string>("");
    const [selectedBrand, setSelectedBrand] = useState<string>("nike");
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <SafeAreaView style={styles.container}>
            {/*<StatusBar />*/}
            {/*<View*/}
            {/*    style={{ width: "100%", backgroundColor: "#000000"}}*/}
            {/*/>*/}
            <ScrollView
                contentContainerStyle={[styles.scrollViewContainer, { paddingBottom: tabBarHeight }]}
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
                />
                <NewsSection
                    selectedBrand={selectedBrand}
                />
            </ScrollView>
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