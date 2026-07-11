import {StyleSheet, View} from "react-native";
import Banner from "@/components/home/Banner";
import {spaces} from "@/constants/spaces";
import {shoes} from "@/data/shoes";
import HorizontalCard from "@/components/home/newsSection/components/HorizontalCard";
import {IS_LARGE_SCREEN} from "@/constants/sizes";
import {router} from "expo-router";


interface NewsSectionProps {
    selectedBrand: string;
}

export default function NewsSection({ selectedBrand }: NewsSectionProps) {

    const item = shoes
        .find((elem) => elem.brand === selectedBrand)
        ?.stock.find((elem) => elem.new);

    if (!item) {
        return null
    }

    const navigateToNewsList = () => {
        router.push("/news-list")

    }

    const navigateToDetails = () => {
        router.push({ pathname: "/details/[id]", params: { id: item.id } });

    }

    return (
        <View
            style={styles.container}
            // style={height < 400 ? landscapeStyle : styles.container}
        >
            <Banner text={"Nouveautés"} navigate={navigateToNewsList} />
            <HorizontalCard item={item} onPress={navigateToDetails}/>
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