import { FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { colors } from "@/constants/colors";
import {RootState} from "@/store/store";
import ListItem from "@/components/agenda/ListItem";
import {useState} from "react";
import Form from "@/components/modal/Form";

interface HeaderProps {
    openForm: () => void;
}

const Header = ({ openForm }: HeaderProps) => (
    <View style={styles.headerContainer}>
        <View />
        <Text style={styles.title}>AGENDA</Text>
        <Ionicons
            name="add-circle"
            size={32}
            color={colors.PINK}
            onPress={openForm}
        />
    </View>
);

export default function AgendaList() {

    const agendaItems = useSelector((state: RootState) => state.agenda.events);
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
    const closeFormHandler = () => setIsFormVisible(false);
    const openFormHandler = () => setIsFormVisible(true);

    return (
        <>
            <FlatList
                data={agendaItems}
                keyExtractor={({ id }) => id}
                ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
                style={styles.listContainer}
                renderItem={({ item }) => <ListItem item={item} />}
                ListHeaderComponent={<Header openForm={openFormHandler} />}
            />
            <Form isFormVisible={isFormVisible} closeForm={closeFormHandler} />
        </>

    );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 16,
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 80,
        paddingHorizontal: 16,
        backgroundColor: colors.DARK,
    },
    title: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        color: colors.VIOLET,
    },
});
