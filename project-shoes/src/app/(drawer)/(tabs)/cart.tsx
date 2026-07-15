import {StyleSheet, View, Text} from "react-native";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";

export default function Cart() {

    const state = useSelector((state: RootState) => state.cart);
    const {shoes, totalAmount} = state;

    return (
        <View style={styles.container}>
            <Text>Cart</Text>
        </View>
    )
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})