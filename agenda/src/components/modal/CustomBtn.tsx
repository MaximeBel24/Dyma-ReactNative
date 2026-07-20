import {Pressable, StyleSheet, Text} from "react-native";
import {colors} from "@/constants/colors";

interface CustomBtnProps {
    text: string;
    onPress: () => void;
    color: (typeof colors)[keyof typeof colors];
}

const CustomBtn = ({ text, onPress, color }: CustomBtnProps) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.btn,
                { backgroundColor: color, opacity: pressed ? 0.8 : 1 },
            ]}
            accessibilityRole={"button"}
        >
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

export default CustomBtn;

const styles = StyleSheet.create({
    btn: {
        width: 140,
        height: 60,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: colors.WHITE,
        fontWeight: "800",
        fontSize: 24,
    },
});
