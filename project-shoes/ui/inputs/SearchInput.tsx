import {Platform, StyleSheet, TextInput, View} from "react-native";
import {EvilIcons} from "@expo/vector-icons";
import {colors} from "@/constants/colors";
import {spaces} from "@/constants/spaces";
import {radius} from "@/constants/radius";
import {textSize} from "@/constants/textSize";
import {IS_SMALL_SCREEN} from "@/constants/sizes";

interface SearchInputProps {
    placeholder: string;
    value: string;
    onChangeText: (value: string) => void;
}

export default function SearchInput({placeholder, value, onChangeText}: SearchInputProps) {
    return (
        <View style={styles.inputContainer}>
            <EvilIcons
                name={"search"}
                size={32}
                color={colors.GREY}
                style={styles.searchIcon}
            />
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.WHITE,
        marginHorizontal: spaces.L,
        borderRadius: radius.FULL,
        height: IS_SMALL_SCREEN ? 44 : 50,
        maxWidth: 360
    },
    searchIcon: {
        marginHorizontal: spaces.M,
        // marginBottom: Platform.OS === "android" ? spaces.XS : 0,
        marginBottom: Platform.select({ android: spaces.XS, ios: 0 }),
    },
    input: {
        flex: 1,
        paddingVertical: spaces.S,
        paddingRight: spaces.S,
        color: colors.GREY,
        fontFamily: "Regular",
        fontSize: textSize.M
    }
})