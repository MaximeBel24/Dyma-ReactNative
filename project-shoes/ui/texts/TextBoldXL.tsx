import {TextProps} from "@/ui/texts/index";
import {StyleSheet, Text} from "react-native";
import {textSize} from "@/constants/textSize";
import {colors} from "@/constants/colors";

export default function TextBoldXL({ children, isBlue = false, style }: TextProps) {
    return (
        <Text
            style={[styles.text, { color: isBlue ? colors.BLUE : colors.DARK }, style]}
        >
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'SemiBold',
        fontSize: textSize.XL
    }
})