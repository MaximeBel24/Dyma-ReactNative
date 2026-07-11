import {View} from "react-native";

interface ItemSeparatorProps {
    width?: number;
    height?: number;
}

export default function ItemSeparator({ width, height }: ItemSeparatorProps) {
    return <View style={{ width, height }} />
}