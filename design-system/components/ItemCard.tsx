import {colors} from "@/constants/colors";
import {StyleSheet, View} from "react-native";
import {TextM, TextXL} from "@/components/text";
import {margin} from "@/constants/margin";
import {radius} from "@/constants/radius";
import React from "react";

interface ItemCardProps {
    title: string;
    color: string;
    Logo: React.ComponentType<{ width?: number; height?: number;  color?: string}>;
    descritpion: string;
}

const CARD_PADDING = 14;

export default function ItemCard({title, color, Logo, descritpion}: ItemCardProps) {
    return (
        <View style={[styles.card, {backgroundColor: color}]}>
            <View style={styles.cardContent}>
                <Logo width={50} height={50} color={color} />
                <View style={styles.textContainer}>
                    <TextXL color={color}>{title}</TextXL>
                    <TextM>{descritpion}</TextM>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: 140,
        borderWidth: 1,
        marginVertical: margin.VERTICAL_SEPARATOR,
        borderRadius: radius.MEDIUM,
        padding: CARD_PADDING
    },
    cardContent: {
        width: "100%",
        height: "100%",
        borderRadius: radius.MEDIUM,
        backgroundColor: colors.LIGHT,
        flexDirection: "row",
        alignItems: "center",
        padding: CARD_PADDING,
    },
    textContainer: {
        flex: 1,
        height: "100%",
        paddingLeft: CARD_PADDING,
        justifyContent: "space-evenly"
    },
})