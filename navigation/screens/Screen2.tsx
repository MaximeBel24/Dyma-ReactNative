import {Pressable, StyleSheet, Text} from "react-native";

interface ScreenProps {
    route: any
}

export default function Screen2({ route }: ScreenProps) {
    const { name } = route.params;
    return (
        <Pressable style={styles.container} onPress={() => {}}>
            <Text>Hello {name}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }
})