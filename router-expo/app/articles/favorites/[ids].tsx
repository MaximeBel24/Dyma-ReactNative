import {Link, router, useLocalSearchParams, useRouter} from "expo-router";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors} from "@/constants/color";

export default function FavoritesArticlesPage() {

    const params = useLocalSearchParams()
    const ids: string[] = JSON.parse(params.ids)
    const router = useRouter()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Les articles favoris</Text>
            {ids.map((id) => {
                return (
                    <Text
                        key={id}
                        style={styles.text}
                    >
                        {id}
                    </Text>
                )
            })}
            <TouchableOpacity
                style={styles.link}
                onPress={() => router.back()}
            >
                <Text style={styles.linkText}>Revenir sur tous les articles</Text>
            </TouchableOpacity>
            <Link
                href="/"
                style={styles.link}
            >
                <Text style={styles.linkText}>Revenir sur l'écran de bienvenue</Text>
            </Link>
            <Link
                href={{
                    pathname: "/articles/[id]",
                    params: { id: "34543", dismissCount: 2 },
                }}
                style={styles.link}
            >
                <Text style={styles.text}>Lire l'article</Text>
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
    text: {
        color: colors.light,
        fontSize: 18,
    }
});
