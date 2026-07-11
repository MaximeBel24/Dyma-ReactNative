import { TouchableOpacity } from "react-native";
import {TouchableProps} from "@/ui/touchable/index";

export default function Touchable({ styles, children }: TouchableProps) {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles}>
            {children}
        </TouchableOpacity>
    );
}
