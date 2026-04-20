import {StyleSheet, View} from "react-native";
import {spaces} from "@/constants/spaces";
import {colors} from "@/constants/colors";
import TextMediumM from "@/ui/texts/TextMediumM";
import TextBoldXL from "@/ui/texts/TextBoldXL";
import TextBoldL from "@/ui/texts/TextBoldL";


interface DetailsDescriptionProps {
    name: string;
    price: number;
    description: string;
}

export default function DetailsDescription({name, price, description}: DetailsDescriptionProps) {
    return (
        <View style={styles.descritpionContainer}>
            <View>
                <TextMediumM isBlue style={styles.textSpacing}>
                    MEILLEUR CHOIX
                </TextMediumM>
                <TextBoldXL style={styles.textSpacing}>{name}</TextBoldXL>
            </View>
            <TextBoldL style={styles.textSpacing}>{price} €</TextBoldL>
            <TextMediumM style={styles.descriptionText}>{description}</TextMediumM>
        </View>
    )
}

const styles = StyleSheet.create({
    descritpionContainer: {
        paddingHorizontal: spaces.L,
    },
    textSpacing: {
        marginBottom: spaces.S,
    },
    descriptionText: {
        color: colors.GREY,
    }
})