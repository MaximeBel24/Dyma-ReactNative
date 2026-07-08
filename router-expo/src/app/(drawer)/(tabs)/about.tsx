import {StyleSheet, View, Text} from "react-native";
import {Link} from "expo-router";

export default function AboutPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Qui somme nous ?</Text>
            <Link href="/" style={styles.link}>
                <Text style={styles.linkText}>Revenir sur l'écran d'accueil</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
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