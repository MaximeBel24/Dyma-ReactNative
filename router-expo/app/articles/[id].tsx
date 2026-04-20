import {Stack, useLocalSearchParams, useRouter} from "expo-router"
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import {colors} from "@/constants/color";

export default function ArticleDetails() {

    const { id, dismissCount } = useLocalSearchParams();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "Article: " + id
                }}
            />
            <Text style={styles.title}>Id de l'article</Text>
            <Text style={styles.title}>{id}</Text>

            <TouchableOpacity
                style={styles.link}
                onPress={() => router.dismiss(Number(dismissCount))}
            >
                <Text style={styles.linkText}>Revenir sur tous les articles</Text>
            </TouchableOpacity>
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
})
