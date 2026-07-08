import {StyleSheet, View, Text, FlatList} from "react-native";
import {Shoe, shoes} from "@/data/shoes";
import HomeStackNavigator from "@/navigators/HomeStackNavigator";
import ItemSeparator from "@/ui/separators/ItemSeparator";
import {spaces} from "@/constants/spaces";
import ListItem from "@/screens/notifications/components/ListItem";
import {colors} from "@/constants/colors";
import {NavigationProp} from "@react-navigation/core";

interface NotificationsProps {
    navigation: NavigationProp<any>;
}

const ids = ["nik64p", "adi7p", "adi203p"];

export default function Notifications({ navigation, }: NotificationsProps) {

    const data = ids.map((id) =>
        shoes
            .find((item) => item.stock.find((elem) => elem.id === id))
            ?.stock.find((item) => item.id === id)
    )

    const navigateToDetails = (id: string) => navigation.navigate("Details", { id })

    const renderItem = ({ item }: {item: Shoe}) => <ListItem item={item} navigateToDetails={navigateToDetails}/>

    return (
        <FlatList
            style={styles.container}
            data={data}
            keyExtractor={({ id }: {id :string}) => id}
            ItemSeparatorComponent={() => <ItemSeparator height={spaces.L} />}
            renderItem={renderItem}
        />
    )
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.LIGHT,
        paddingTop: spaces.L,
    }
})