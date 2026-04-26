import {useFonts} from "expo-font";
import BottomTabsNavigator from "@/navigators/BottomTabsNavigator";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function Index() {

    const [fontsLoaded] = useFonts({
        Light: require("../assets/fonts/Montserrat-Light.ttf"),
        Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
        Medium: require("../assets/fonts/Montserrat-Medium.ttf"),
        SemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    });

  return fontsLoaded ? (
      <SafeAreaProvider>
          <BottomTabsNavigator />
      </SafeAreaProvider>
  ) : null;
}
