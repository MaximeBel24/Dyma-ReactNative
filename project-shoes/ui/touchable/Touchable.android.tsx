import {ColorValue, TouchableNativeFeedback} from "react-native";
import {TouchableProps} from "@/ui/touchable/index";

export default function Touchable({styles, children, onPress, color}: TouchableProps) {
    return (
        <TouchableNativeFeedback
            style={styles}
            background={TouchableNativeFeedback.Ripple(color as ColorValue, true)}
            onPress={onPress}
        >
            {children}
        </TouchableNativeFeedback>
    )
}