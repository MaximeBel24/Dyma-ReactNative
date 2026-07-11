import {StyleSheet, FlatList} from "react-native";
import {Shoe, shoes} from "@/data/shoes";
import ItemSeparator from "@/ui/separators/ItemSeparator";
import {spaces} from "@/constants/spaces";
import ListItem from "@/components/notifications/ListItem";
import {colors} from "@/constants/colors";
import {router} from "expo-router";

const ids = ["nik64p", "adi7p", "adi203p"];

export default function Notifications() {

    const data = ids.map((id) =>
        shoes
            .find((item) => item.stock.find((elem) => elem.id === id))
            ?.stock.find((item) => item.id === id)
    ).filter((item) => item !== undefined);

    const navigateToDetails = (id: string) => router.push({ pathname: "/details/[id]", params: { id } })

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