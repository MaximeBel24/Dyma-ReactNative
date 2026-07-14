import { Tabs } from "expo-router"
import {colors} from "@/constants/colors";
import {Platform, Pressable, StyleSheet, View} from "react-native";
import {FOCUSED_ICON_SIZE, IS_LARGE_SCREEN, SCREEN_WIDTH, SMALL_ICON_SIZE} from "@/constants/sizes";
import BottomTabsBackground from "@/assets/images/navigation/bottomTabsBackground.svg";
import DrawerIcon from "@/assets/images/navigation/drawer.svg";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {spaces} from "@/constants/spaces";
import {radius} from "@/constants/radius";
import {DrawerActions} from "@react-navigation/native";
import HomeIcon from "@/assets/images/navigation/home.svg";
import FavoriteIcon from "@/assets/images/navigation/favorite.svg";
import CartIcon from "@/assets/images/navigation/cart.svg";
import NotificationIcon from "@/assets/images/navigation/notifications.svg";
import ProfileIcon from "@/assets/images/navigation/user.svg";

const originalWidth = 375;
const originalHeight = IS_LARGE_SCREEN ? 212 : 106;
const aspectRatio = originalWidth / originalHeight;

export default function BottomTabsLayout() {

    const insets = useSafeAreaInsets();

    return (
        <Tabs
            screenOptions={({ navigation }) => ({
                tabBarStyle: {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "transparent",
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
                tabBarButton: ({ ref, ...props }) => (
                    <Pressable {...props} />
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
                ),
                headerStyle: { backgroundColor: colors.LIGHT },
                headerShadowVisible: false,
                headerTitleAlign: "center",
                headerLeft: () => (
                    <Pressable
                        style={styles.drawerIconContainer}
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    >
                        <DrawerIcon/>
                    </Pressable>
                )
            })}
        >
            <Tabs.Screen
                name={"(home)"}
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
                name={"favorites"}
                options={{
                    title: "Favoris",
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
                name={"cart"}
                options={{
                    title: "Panier",
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
                name={"notifications"}
                options={{
                    title: "Notifications",
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
                name={"profile"}
                options={{
                    title: "Profil",
                    tabBarIcon: ({ color, focused }) => {
                        return <ProfileIcon
                            width={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
                            height={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
                            color={color}
                        />
                    }
                }}
            />
        </Tabs>
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