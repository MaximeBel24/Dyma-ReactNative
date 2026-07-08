import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {withLayoutContext} from "expo-router";
import {colors} from "@/src/constants/color";

const Tab = createMaterialTopTabNavigator().Navigator;

export const TopTabs = withLayoutContext(Tab);

export default function TopTabsLayout() {
    return (
        <TopTabs screenOptions={{
            tabBarIndicatorStyle: {
                backgroundColor: colors.primary,
            }
        }}>
            <TopTabs.Screen name="index" options={{title: "Informations"}}/>
            <TopTabs.Screen name="settings" options={{title: "Réglages"}}/>
        </TopTabs>
    );
}