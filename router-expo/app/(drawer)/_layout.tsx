import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Drawer } from "expo-router/drawer"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import AntDesign from "@expo/vector-icons/AntDesign"
import {colors} from "@/constants/color";
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from "@react-navigation/drawer";

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={({ navigation }: {navigation: any}) => {
                    return {
                        drawerStyle: {
                            backgroundColor: colors.light,
                        },
                        drawerActiveBackgroundColor: colors.primary,
                        drawerInactiveBackgroundColor: colors.light,
                        drawerActiveTintColor: colors.dark,
                        drawerInactiveTintColor: colors.dark,
                        drawerItemStyle: {
                            marginBottom: 12,
                        },
                        headerStyle: {
                            backgroundColor: colors.dark,
                        },
                        headerTitleStyle: {
                            color: colors.light,
                        },
                        headerTitleAlign: "center",
                        overlayColor: colors.dark,
                        headerLeft: () => {
                            return (
                                <AntDesign
                                    name={"menu-unfold"}
                                    size={24}
                                    color={colors.light}
                                    onPress={() => navigation.openDrawer()}
                                    style={{ marginLeft: 16 }}
                                />
                            )
                        },
                    }
                }}
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen
                    name="index"
                    options={{
                        drawerLabel: "Accueil",
                        title: "Accueil",

                        drawerIcon: ({ color }) => (
                            <FontAwesome size={28} name="home" color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="Notifications"
                    options={{
                        drawerLabel: "Notifications",
                        title: "Notifications",
                        drawerIcon: ({ color }) => (
                            <FontAwesome size={28} name="bell" color={color} />
                        ),
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label={"Déconnexion"}
                activeTintColor={colors.primary}
                inactiveTintColor={colors.dark}
                icon={({ color }: {color : string}) => (
                    <FontAwesome name={"sign-out"} size={28} color={color} />
                )}
                onPress={() => console.log("Logout")}
            />
        </DrawerContentScrollView>
    )
}