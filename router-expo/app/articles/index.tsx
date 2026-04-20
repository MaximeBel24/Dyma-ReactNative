import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import {colors} from "@/constants/color";
import {articlesStyles} from "@/app/articles/_layout";

export default function ArticlesPage() {
    return (
        <View style={[styles.container, articlesStyles.borderTopPage]}>
            <Text style={styles.title}>Tous les articles</Text>
            <Link href={{
                pathname: "/articles/favorites/[ids]",
                params: { ids: JSON.stringify(["1234", "6543", "8734"]) },
            }}
                  style={styles.link}
            >
                <Text style={styles.linkText}>Aller aux articles favoris</Text>
            </Link>
            <Link href="/" style={styles.link}>
                <Text style={styles.linkText}>Revenir sur l'écran de bienvenue</Text>
            </Link>
            <Link href={"/articles/1234"} style={styles.link} >
                <Text style={styles.linkText}>Aller sur le détails de l'article</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.light,
    },
    link: {
        padding: 16,
        backgroundColor: colors.primary,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 12,
    },
    linkText: {
        color: colors.dark,
        fontSize: 20,
    },
});
