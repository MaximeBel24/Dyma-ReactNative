import {StyleSheet, TouchableOpacity, View, Text} from "react-native";

interface ModalOpenerProps {
    onOpenModal: () => void;
}

export default function ModalOpener({onOpenModal}: ModalOpenerProps) {
    return (
        <View style={styles.inputContainer}>
            <TouchableOpacity activeOpacity={0.9} style={styles.btn} onPress={onOpenModal}>
                <Text style={styles.btnText}>Ajouter un élément</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 8,
    },
    btn: {
        width: "100%",
        height: 50,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "violet",
        marginTop: 12
    },
    btnText: {
        color: "white",
        fontSize: 20
    },
})