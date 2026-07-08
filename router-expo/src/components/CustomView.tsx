import {StyleSheet, View} from "react-native";
import React from "react";

interface CustomViewProps {
    children: React.ReactNode;
}

export default function CustomView({children} : CustomViewProps) {
    return (
        <View style={styles.container}>
            {children}
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
});