import {StyleSheet, Text} from "react-native";

interface TitleProps {
    text: string;
}

export default function Title({text}: TitleProps) {
    return <Text>{text}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
    },
})