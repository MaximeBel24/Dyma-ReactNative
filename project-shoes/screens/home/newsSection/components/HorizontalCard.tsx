import {View, StyleSheet, Image} from "react-native";
import TextMediumM from "@/ui/texts/TextMediumM";
import TextBoldXL from "@/ui/texts/TextBoldXL";
import TextBoldM from "@/ui/texts/TextBoldM";
import {colors} from "@/constants/colors";
import {radius} from "@/constants/radius";
import {spaces} from "@/constants/spaces";
import {Shoe} from "@/data/shoes";
import {IS_LARGE_SCREEN} from "@/constants/sizes";
import Touchable from "@/ui/touchable/Touchable.android";

interface HorizontalCardProps {
    item: Shoe
    onPress?: () => void
}

export default function HorizontalCard({ item, onPress }: HorizontalCardProps) {

    // const { height } = useWindowDimensions();
    // const landscapeImageStyle: ImageStyle = {
    //     width: "100%",
    //     height: "100%",
    //     transform: [
    //         { rotate: "-20deg" },
    //         { translateX: -spaces.M },
    //         { translateY: -spaces.L },
    //         { scale: 0.8 }
    //     ]
    // }

    return (
        <View style={styles.container}>
            <Touchable styles={styles.touchableContainer} onPress={onPress}>
                <View style={styles.touchableContainer}>
                    <View style={styles.descriptionContainer}>
                        <View>
                            <TextMediumM isBlue>MEILLEUR CHOIX</TextMediumM>
                            <TextBoldXL>{item.name}</TextBoldXL>
                        </View>
                        <TextBoldM>{item.price} €</TextBoldM>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={item.items[0].image}
                            style={styles.image}
                            // style={height < 400 ? landscapeImageStyle : styles.image}
                        />
                    </View>
                </View>
            </Touchable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "80%",
        backgroundColor: colors.WHITE,
        borderRadius: radius.REGULAR,
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: spaces.L,
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
        flexDirection: "row"
    },
    descriptionContainer: {
        flex: 1,
        height: "90%",
        justifyContent: "space-between",
        padding: IS_LARGE_SCREEN ? spaces.XL * 1.5 : spaces.L,
    },
    imageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: spaces.M,
    },
    image: {
        width: "100%",
        height: "100%",
        transform: [
            { rotate: "-20deg" },
            { translateX: -spaces.M },
            { translateY: IS_LARGE_SCREEN ? -spaces.XL : -spaces.L },
            { scale: IS_LARGE_SCREEN ? 1.1 : 1.3 },
        ],
    },
});
