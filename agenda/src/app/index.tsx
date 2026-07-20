import {StatusBar, StyleSheet, View} from "react-native";
import AgendaList from "@/components/agenda/AgendaList";
import {colors} from "@/constants/colors";

export default function Index() {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AgendaList />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DARK,
        paddingVertical: 30
    }
})
