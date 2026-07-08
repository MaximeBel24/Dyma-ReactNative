import {StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur l'application</Text>
        <Link href={"/home"} style={styles.link}>
            <Text style={styles.linkText}>Aller à la page des réglages</Text>
        </Link>
        <Link href="/articles" style={styles.link}>
            <Text style={styles.linkText}>Voir les articles</Text>
        </Link>
    </View>
  );
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
