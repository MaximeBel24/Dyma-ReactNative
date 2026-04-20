import {StyleSheet, Text, TouchableOpacity} from "react-native";

interface CustomBtnProps {
    text: string;
    color: string;
    onPress: () => void;
}

export default function CustomBtn({text, color, onPress}: CustomBtnProps) {
    return (
        <TouchableOpacity style={[styles.modalBtns, {backgroundColor: color}]} onPress={onPress}>
            <Text style={styles.modalBtnText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    modalBtns: {
        width: "40%",
        height: 50,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16
    },
    modalBtnText: {
        color: "white",
        fontSize: 20
    }
})