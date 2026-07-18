import {StyleSheet, View, Text, FlatList} from "react-native";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import ItemSeparator from "@/ui/separators/ItemSeparator";
import {spaces} from "@/constants/spaces";
import {IS_LARGE_SCREEN} from "@/constants/sizes";
import ListItem from "@/components/cart/ListItem";
import TextBoldL from "@/ui/texts/TextBoldL";
import {colors} from "@/constants/colors";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";
import {radius} from "@/constants/radius";
import TextBoldXL from "@/ui/texts/TextBoldXL";
import CustomButton from "@/ui/buttons/CustomButton";

export default function Cart() {

    const state = useSelector((state: RootState) => state.cart);
    const {shoes, totalAmount} = state;



    return (
        <View style={styles.container}>
           <FlatList
               data={shoes}
               contentContainerStyle={{ flexGrow: 1 }}
               showsVerticalScrollIndicator={false}
               keyExtractor={( item ) => `${item.id}-${item.size}`}
               renderItem={({ item }) => <ListItem item={item} /> }
               ItemSeparatorComponent={() => <ItemSeparator height={spaces.L} />}
               // numColumns={IS_LARGE_SCREEN ? 2 : 1}
               ListEmptyComponent={
                   <View style={styles.emptyListContainer}>
                       <TextBoldL>
                           Votre panier est vide
                       </TextBoldL>
                   </View>
               }
           />
            <View style={[styles.priceContainer]}>
                <View style={styles.rowContainer}>
                    <TextBoldXL>Sous total</TextBoldXL>
                    <TextBoldXL>{totalAmount} €</TextBoldXL>
                </View>
                <View style={styles.rowContainer}>
                    <TextBoldXL>Frais de port</TextBoldXL>
                    <TextBoldXL>{Math.floor(totalAmount / 15)} €</TextBoldXL>
                </View>
                <View style={styles.dashedLine} />
                <View style={styles.rowContainer}>
                    <TextBoldXL>Total</TextBoldXL>
                    <TextBoldXL>
                        {totalAmount + Math.floor(totalAmount / 15)} €
                    </TextBoldXL>
                </View>
                <CustomButton text={"Passer la commande"} onPress={() => {}}/>
            </View>
        </View>
    )
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.LIGHT
    },
    contentContainer: {
        flexGrow: 1,
    },
    emptyListContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.LIGHT
    },
    priceContainer: {
        backgroundColor: colors.WHITE,
        borderTopLeftRadius: radius.REGULAR,
        borderTopRightRadius: radius.REGULAR,
        padding: spaces.XL,
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: spaces.M,
    },
    dashedLine: {
        borderStyle: "dashed",
        borderWidth: 1,
        borderColor: colors.GREY,
        marginBottom: spaces.M,
    },
});


