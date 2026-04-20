import {StyleSheet, useWindowDimensions, View} from "react-native";
import Banner from "@/screens/home/components/Banner";
import {spaces} from "@/constants/spaces";
import {shoes} from "@/data/shoes";
import HorizontalCard from "@/screens/home/newsSection/components/HorizontalCard";
import {IS_LARGE_SCREEN} from "@/constants/sizes";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/types/navigation";

interface NewsSectionProps {
    selectedBrand: string;
}

export default function NewsSection({ selectedBrand }: NewsSectionProps) {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    // const { height } = useWindowDimensions();
    //
    // const landscapeStyle = {
    //     flex: 160,
    //     minHeight: 240
    // }

    const item = shoes
        .find((elem) => elem.brand === selectedBrand)
        ?.stock.filter((item) => item.new) ?? [];

    const navigateToNewsList = () => {
        navigation.navigate("NewsList");
    }

    return (
        <View
            style={styles.container}
            // style={height < 400 ? landscapeStyle : styles.container}
        >
            <Banner text={"Nouveautés"} navigate={navigateToNewsList} />
            {item[0] && <HorizontalCard item={item[0]} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 240,
        minHeight: IS_LARGE_SCREEN ? 340 : 200,
        paddingVertical: spaces.L
    }
})