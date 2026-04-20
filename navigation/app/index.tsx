import StackNavigator from "@/navigation/StackNavigator";
import BottomTabsNavigator from "@/navigation/BottomTabsNavigator";
import {SafeAreaProvider} from "react-native-safe-area-context";
import TopTabsNavigator from "@/navigation/TopTabsNavigator";
import DrawerNavigator from "@/navigation/DrawerNavigator";


export default function Index() {
    return (
        <SafeAreaProvider>
            {/*<TopTabsNavigator />*/}
            <DrawerNavigator />
            {/*<StackNavigator />*/}
            {/*<BottomTabsNavigator />*/}
        </SafeAreaProvider>

    )
}
