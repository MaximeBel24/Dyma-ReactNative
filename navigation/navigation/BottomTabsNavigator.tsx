import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Screen1 from "@/screens/Screen1";
import Screen3 from "@/screens/Screen3";
import {AntDesign, Feather, Ionicons} from "@expo/vector-icons";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import StackNavigator from "@/navigation/StackNavigator";
import TopTabsNavigator from "@/navigation/TopTabsNavigator";

const Tab = createBottomTabNavigator()

export default function BottomTabsNavigator() {

    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShadowVisible: true,
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: "#e6e8f5"
                },
                headerTitleStyle: {
                    color: "blue"
                },
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: "grey",
                tabBarLabelStyle: {
                    fontSize: 16
                },
                tabBarStyle: {
                    height: insets.bottom + 50
                },
                tabBarIconStyle: {
                    top: "50%",
                    transform: [{ translateY : -14 }]
                },
                tabBarActiveBackgroundColor: "#e6e8f5",
                tabBarShowLabel: false,
                headerShown: false,
            }}
        >
            <Tab.Screen
                component={StackNavigator}
                name={"Home"}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name={"home"} size={28} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                component={Screen3}
                name={"Settings"}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name={"settings"} size={28} color={color} />
                    )
                }}
            />
            <Tab.Screen
                component={TopTabsNavigator}
                name={"Articles"}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name={"journal-sharp"} size={32} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}