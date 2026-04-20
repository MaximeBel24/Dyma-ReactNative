import { Pressable, StyleSheet, Text } from "react-native";

interface Screen4Props {
    navigation: any;
}

export default function Screen4({ navigation }: Screen4Props) {

    console.log("screen 4")

    const navigate = () => navigation.jumpTo("Article 2", { name: "Fred"})

    return (
        <Pressable
            style={styles.container}
            onPress={navigate}
        >
            <Text>Article 1</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
