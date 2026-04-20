import {View, StyleSheet, Image, Platform} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {Shoe} from "@/data/shoes";
import TextMediumS from "@/ui/texts/TextMediumS";
import TextBoldL from "@/ui/texts/TextBoldL";
import TextMediumM from "@/ui/texts/TextMediumM";
import {colors} from "@/constants/colors";
import {radius} from "@/constants/radius";
import {spaces} from "@/constants/spaces";
import {IS_LARGE_SCREEN, SCREEN_WIDTH} from "@/constants/sizes";
import Touchable from "@/ui/touchable/Touchable.android";
import {useNavigation} from "@react-navigation/native";

interface VerticalCardProps {
    item: Shoe
    isListScreen?: boolean
}

export default function VerticalCard({ item, isListScreen = false }: VerticalCardProps) {

    const navigation = useNavigation();
    const shoeColors = item.items.map((elem) => elem.color);

    return (
        <View style={styles.container}>
            <Touchable onPress={() => navigation.navigate("Details")}>
                <View style={styles.touchableContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={item.items[0].image} style={styles.image} />
                    </View>
                    <View style={[
                        styles.descriptionContainer,
                        { flex: isListScreen ? 1 : IS_LARGE_SCREEN ? 0.7 : 0.2 },
                    ]}>
                        <View>
                            <TextMediumS isBlue>TOP VENTE</TextMediumS>
                            <TextBoldL style={styles.itemName}>{item.name}</TextBoldL>
                        </View>
                        {isListScreen ? (
                            <View style={styles.bottomDescriptionContainer}>
                                <View style={styles.priceContainer}>
                                    <TextMediumM>{item.price} €</TextMediumM>
                                </View>
                                <View style={styles.colorsContainer}>
                                    {shoeColors.map((color: string) => (
                                        <View
                                            key={color}
                                            style={[styles.colorItem, { backgroundColor: color }]}
                                        />
                                        ))}
                                </View>
                            </View>
                        ) : (
                            <TextMediumM>{item.price} €</TextMediumM>
                        )}
                    </View>
                    { isListScreen ? null : (
                        <View style={styles.btn}>
                            <AntDesign name="plus" size={24} color={colors.WHITE} />
                        </View>
                    )}
                </View>
            </Touchable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: IS_LARGE_SCREEN ? SCREEN_WIDTH / 3.5 : 180,
        height: Platform.select({ ios: "100%", android: "90%"}),
        backgroundColor: colors.WHITE,
        borderRadius: radius.REGULAR,
        elevation: 4,
        shadowColor: colors.DARK,
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 2,
    },
    touchableContainer: {
        width: "100%",
        height: "100%",
        padding: spaces.S,
        paddingVertical: 2
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: spaces.S,
    },
    image: {
        width: "100%",
        height: "100%",
        transform: [
            { rotate: "-20deg" },
            { translateX: -spaces.S },
            { translateY: -spaces.S },
        ],
    },
    descriptionContainer: {
        flex: IS_LARGE_SCREEN ? 0.7 : 0.2,
        justifyContent: "space-between",
        padding: spaces.S,
    },
    itemName: {
        marginTop: spaces.S,
    },
    bottomDescriptionContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    priceContainer: {
        width: "50%",
    },
    colorsContainer: {
        flexDirection: "row",
        width: "50%",
        justifyContent: "flex-end",
    },
    colorItem: {
        width: spaces.M,
        height: spaces.M,
        borderRadius: radius.FULL,
        marginHorizontal: spaces.XS,
        borderWidth: 1,
        borderColor: colors.GREY
    },
    btn: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: colors.BLUE,
        borderTopLeftRadius: radius.REGULAR,
        borderBottomRightRadius: radius.REGULAR,
        justifyContent: "center",
        alignItems: "center",
        width: 36,
        height: 36,
    },
});