import {Stack, useRouter} from "expo-router";
import {AntDesign} from "@expo/vector-icons";
import {colors} from "@/constants/color";
import {StyleSheet} from "react-native";

export default function ArticlesLayout() {

    const router = useRouter();

    return (
        <Stack
            screenOptions={{
                contentStyle: {
                    flex: 1,
                    backgroundColor: colors.dark,
                    alignItems: "center",
                },
                headerStyle: {
                    backgroundColor: colors.dark,
                },
                headerTintColor: colors.primary,
                headerTitleAlign: "center",
                headerTitle: "Articles",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerLeft: () => {
                    return (
                        <AntDesign
                            name="step-backward"
                            size={24}
                            color={colors.primary}
                            onPress={() => router.back()}
                        />
                    )
                },
            }}
        >
            <Stack.Screen
                name="index"
                options={{ title: "Articles" }}
            />
            <Stack.Screen
                name="[id]"
            />
            <Stack.Screen
                name="favorites/[ids]"
                options={{ title: "Articles Favoris" }}
            />
        </Stack>
    );
}

export const articlesStyles = StyleSheet.create({
    borderTopPage: {
        borderTopWidth: 1,
        borderTopColor: colors.primary,
    }
})