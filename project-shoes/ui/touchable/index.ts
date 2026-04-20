import {PropsWithChildren} from "react";
import {StyleProp, ViewStyle} from "react-native";

export type TouchableProps = PropsWithChildren<{
    styles?: StyleProp<ViewStyle>;
    onPress?: () => void;
    color?: string;
}>