import {StyleSheet, Text, View} from "react-native";

export default function SettingsPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenue sur la page des réglages</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    link: {
        padding: 16,
        backgroundColor: "#0C1A1A",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 12,
    },
    linkText: {
        color: "white",
        fontSize: 20,
    }
})