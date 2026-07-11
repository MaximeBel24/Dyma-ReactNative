import {StyleSheet, TouchableOpacity, View} from "react-native";
import {spaces} from "@/constants/spaces";
import TextBoldL from "@/ui/texts/TextBoldL";
import TextMediumM from "@/ui/texts/TextMediumM";

interface BannerProps {
    text: string;
    navigate: () => void;

}

export default function Banner({text, navigate}: BannerProps) {

    return (
        <View style={styles.container}>
            <TextBoldL>{text}</TextBoldL>
            <TouchableOpacity onPress={navigate}>
                <TextMediumM isBlue>Voir tout</TextMediumM>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: spaces.L,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: spaces.M,
    }
})