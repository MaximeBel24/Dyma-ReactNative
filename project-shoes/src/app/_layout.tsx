import {store} from "@/store/store";

if (__DEV__) {
    require("../../ReactotronConfig")
}

import { Stack, router } from "expo-router";
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from "react";
import {colors} from "@/constants/colors";
import {Pressable} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Provider} from "react-redux";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {


  const [fontsLoaded] = useFonts({
    Light: require("../../assets/fonts/Montserrat-Light.ttf"),
    Regular: require("../../assets/fonts/Montserrat-Regular.ttf"),
    Medium: require("../../assets/fonts/Montserrat-Medium.ttf"),
    SemiBold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
      <Provider store={store}>
          <Stack
              screenOptions={{
                  headerStyle: {
                      backgroundColor: colors.LIGHT,
                  },
                  headerShadowVisible: false,
                  headerTitleAlign: "center",
              }}
          >
              <Stack.Screen
                  name={"(drawer)"}
                  options={{
                      headerShown: false,
                  }}
              />

              <Stack.Screen
                  name={"details/[id]"}
                  options={{
                      headerLeft: () => (
                          <Pressable onPress={() => router.back()}>
                              <Ionicons name={"chevron-back"} size={24} color={colors.DARK} />
                          </Pressable>
                      )
                  }}
              />

              <Stack.Screen
                  name={"cart"}
                  options={{
                      animation: "slide_from_bottom",
                      title: "Mon panier",
                      headerLeft: () => (
                          <Pressable onPress={() => router.back()}>
                              <Ionicons
                                  name={"chevron-back"}
                                  size={24}
                                  color={colors.DARK}
                              />
                          </Pressable>
                      )
                  }}
              />

          </Stack>
      </Provider>

  )
}
