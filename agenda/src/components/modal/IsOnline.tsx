import { StyleSheet, Text, View, Switch, Platform } from "react-native";
import { colors } from "@/constants/colors";
import {Dispatch, SetStateAction} from "react";

interface IsOnlineProps {
    isEnabled: boolean;
    setIsEnabled: Dispatch<SetStateAction<boolean>>;
}

const IsOnline = ({ isEnabled, setIsEnabled }: IsOnlineProps) => {

    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>En ligne</Text>
            <Switch
                trackColor={{ false: colors.GREY, true: colors.LIGHT }}
                thumbColor={isEnabled ? colors.VIOLET : colors.WHITE}
                ios_backgroundColor={colors.GREY}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.switch}
            />
        </View>
    );
};

export default IsOnline;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 24,
    },
    label: {
        color: colors.LIGHT,
        fontWeight: "600",
        fontSize: 18,
    },
    switch: {
        transform: [{ scale: Platform.select({ android: 1.2, ios: 1, default: 1 }) }],
    },
});
