import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsList from "@/screens/newList";
import List from "@/screens/list";
import HomeScreen from "@/screens/home";
import {colors} from "@/constants/colors";
import {Platform, Pressable, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import DrawerIcon from "@/assets/images/navigation/drawer.svg";
import {NavigationProp} from "@react-navigation/core";
import {spaces} from "@/constants/spaces";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: colors.LIGHT,
                },
                headerShadowVisible: false,
                headerTitleAlign: "center",
                headerLeft: () => (
                    <Pressable onPress={() => navigation.goBack()}>
                        <Ionicons name={"chevron-back"} size={24} color={colors.DARK} />
                    </Pressable>
                )
            })}>
            <Stack.Screen
                component={HomeScreen}
                name="Home"
                options={({navigation}) => ({
                    title: "Shoes",
                    headerLeft: () => (
                        <Pressable
                            style={styles.drawarIconContainer}
                            onPress={() => navigation.getParent<DrawerNavigationProp<any>>().getParent<DrawerNavigationProp<any>>().openDrawer()}
                        >
                            <DrawerIcon/>
                        </Pressable>
                    )
                })}
            />
            <Stack.Group
                screenOptions={({navigation}) => ({
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.goBack()}>
                            <Ionicons name={"chevron-back"} size={24} color={colors.DARK} />
                        </Pressable>
                    )
                })}
            >
                <Stack.Screen
                    component={List}
                    name="List"
                />
                <Stack.Screen
                    component={NewsList}
                    name="NewsList"
                    options={{
                        title: "Nouveautés",
                    }}
                />
            </Stack.Group>

        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    drawarIconContainer: {
        marginLeft: Platform.select({ios: spaces.XS, android: spaces.S})
    }
})