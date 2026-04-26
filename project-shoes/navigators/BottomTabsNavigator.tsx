import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import StackNavigator from "@/navigators/StackNavigator";
import Favorites from "@/screens/favorites";
import Cart from "@/screens/cart";
import Notifications from "@/screens/notifications";
import Profile from "@/screens/profile";
import {colors} from "@/constants/colors";
import HomeIcon from "@/assets/images/navigation/home.svg"
import FavoriteIcon from "@/assets/images/navigation/favorite.svg"
import CartIcon from "@/assets/images/navigation/cart.svg"
import NotificationIcon from "@/assets/images/navigation/notifications.svg"
import ProfileIcon from "@/assets/images/navigation/user.svg"
import BottomTabsBackground from "@/assets/images/navigation/bottomTabsBackground.svg"
import {SMALL_ICON_SIZE, FOCUSED_ICON_SIZE, IS_LARGE_SCREEN, SCREEN_WIDTH} from "@/constants/sizes";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Platform, StyleSheet, TouchableOpacity, View} from "react-native";
import {spaces} from "@/constants/spaces";
import {radius} from "@/constants/radius";

const Tabs = createBottomTabNavigator();

const originalWidth = 375;
const originalHeight = IS_LARGE_SCREEN ? 212 : 106;
const aspectRatio = originalWidth / originalHeight;

export default function BottomTabsNavigator() {

    const insets = useSafeAreaInsets();

    return (
        <Tabs.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: colors.LIGHT,
                    height: originalHeight,
                    marginBottom: insets.bottom / 6,
                    paddingTop: Platform.select({ android: 20, ios: insets.bottom }),
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarIconStyle: {
                    top: "50%",
                    transform: [{ translateY: -SMALL_ICON_SIZE / 4 }],
                },
                tabBarButton: (props) => (
                    <TouchableOpacity {...props} activeOpacity={1} />
                ),
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.BLUE,
                tabBarInactiveTintColor: colors.GREY,
                tabBarBackground: () => (
                    <View style={{ aspectRatio }}>
                        <BottomTabsBackground
                            width={SCREEN_WIDTH}
                            height={"100%"}
                            viewBox={`0 0 ${originalWidth} ${originalHeight}`}
                        />
                    </View>
                )
            }}
        >
            <Tabs.Screen
                name={"HomeStack"}
                component={StackNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => {
                        return <HomeIcon
                            width={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
                            height={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
                            color={color}
                        />
                    }
                }}
            />
            <Tabs.Screen
                name={"Favorites"}
                component={Favorites}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return <FavoriteIcon
                            width={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
                            height={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
                            color={color}
                        />
                    }
                }}
            />
            <Tabs.Screen
                name={"Cart"}
                component={Cart}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <View style={[styles.cartContainer, focused ? styles.activeCart : styles.inactiveCart]}>
                                <CartIcon
                                    width={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
                                    height={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
                                    color={focused ? colors.WHITE : color}
                                />
                            </View>
                        )
                    }
                }}
            />
            <Tabs.Screen
                name={"Notifications"}
                component={Notifications}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return <NotificationIcon
                            width={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
                            height={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
                            color={color}
                        />
                    }
                }}
            />
            <Tabs.Screen
                name={"Profile"}
                component={Profile}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return <ProfileIcon
                            width={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
                            height={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
                            color={color}
                        />
                    }
                }}
            />
        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({
    drawerIconContainer: {
        marginLeft: spaces.L,
    },
    cartContainer: {
        width: 60,
        height: 60,
        borderRadius: radius.FULL,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    activeCart: {
        backgroundColor: colors.BLUE,
    },
    inactiveCart: {
        backgroundColor: colors.WHITE,
    },
});