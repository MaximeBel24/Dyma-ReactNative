import { Tabs } from "expo-router"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import {colors} from "@/src/constants/color";
import AntDesign from "@expo/vector-icons/AntDesign"

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={({navigation} : {navigation: any}) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.light,
                tabBarStyle: {
                    backgroundColor: colors.dark,
                    height: 80,
                    paddingTop: 12,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                },
                headerTintColor: colors.light,
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: colors.dark,
                },
                headerLeft: () => {
                    return (
                        <AntDesign
                            name={"menu-unfold"}
                            size={24}
                            color={colors.light}
                            onPress={() => navigation.getParent().openDrawer()}
                            style={{ marginLeft: 16 }}
                        />
                    )
                },
            })}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Accueil",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={28} name="home" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="articles"
                options={{
                    popToTopOnBlur: true,
                    title: "Articles",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={28} name="book" color={color} />
                    ),
                    tabBarActiveTintColor: colors.dark,
                    tabBarStyle: {
                        backgroundColor: colors.primary,
                        height: 80,
                        paddingTop: 12,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                        position: "absolute",
                    },
                    lazy: false,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profil",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={28} name="user" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "À propos",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={28} name="question" color={color} />
                    ),
                }}
            />
        </Tabs>
    )
}
