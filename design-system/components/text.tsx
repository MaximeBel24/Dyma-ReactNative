import {StyleSheet, Text} from "react-native";
import {textSize} from "@/constants/textSize";

interface TextProps {
    children: any
    color?: string
}

export const TextXL = ({children, color}: TextProps) => (
    <Text style={[styles.textXl, { color }]}>{ children }</Text>
)

export const TextM = ({children}: TextProps) => (
    <Text style={styles.textM}>{ children }</Text>
)


const styles = StyleSheet.create({
    textXl: {
        fontFamily: "InterBold",
        fontSize: textSize.TEXT_XL
    },
    textM: {
        fontFamily: "InterRegular",
        fontSize: textSize.TEXT_M,
    }
})