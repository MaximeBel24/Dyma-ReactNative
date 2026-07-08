import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {Link, RelativePathString} from "expo-router";
import {colors} from "@/src/constants/color";

interface CustomLinkProps {
    text: string;
    href: RelativePathString;
}

export const CustomLink = ({text, href}: CustomLinkProps) => {
    return (
        <Link href={href} style={styles.link}>
            <Text style={styles.text}>{text}</Text>
        </Link>
    )
}

interface CustomButtonProps {
    text: string;
    onPress: () => void;
}

export const CustomButton = ({text, onPress}: CustomButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.link}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    link: {
        padding: 16,
        backgroundColor: colors.dark,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
    },
    text: {
        color: colors.light,
        fontSize: 20,
        textAlign: "center",
    },
})