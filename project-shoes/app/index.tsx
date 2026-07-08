import {useFonts} from "expo-font";
import {SafeAreaProvider} from "react-native-safe-area-context";
import MainStackNavigator from "@/navigators/MainStackNavigator";

export default function Index() {

    const [fontsLoaded] = useFonts({
        Light: require("../assets/fonts/Montserrat-Light.ttf"),
        Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
        Medium: require("../assets/fonts/Montserrat-Medium.ttf"),
        SemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    });

  return fontsLoaded ? (
      <SafeAreaProvider>
          <MainStackNavigator />
      </SafeAreaProvider>
  ) : null;
}
