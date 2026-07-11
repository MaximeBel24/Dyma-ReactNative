import {router, Stack} from "expo-router";
import {colors} from "@/constants/colors";
import {Platform, Pressable, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import DrawerIcon from "@/assets/images/navigation/drawer.svg";
import {spaces} from "@/constants/spaces";
import {DrawerActions} from "@react-navigation/native";

export default function HomeLayout() {

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.LIGHT,
                },
                headerShadowVisible: false,
                headerTitleAlign: "center",
                headerLeft: () => (
                    <Pressable onPress={() => router.back()}>
                        <Ionicons name={"chevron-back"} size={24} color={colors.DARK} />
                    </Pressable>
                )
            }}>

            <Stack.Screen
                name="index"
                options={({navigation}) => ({

                    title: "Shoes",
                    headerLeft: () => (
                        <Pressable
                            style={styles.drawarIconContainer}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <DrawerIcon/>
                        </Pressable>
                    ),
                })}
            />
            <Stack.Screen name="list" />
            <Stack.Screen name="news-list" options={{ title: "Nouveautés" }} />


        </Stack>
    )
}

const styles = StyleSheet.create({
    drawarIconContainer: {
        marginLeft: Platform.select({ios: spaces.XS, android: spaces.S})
    }
})