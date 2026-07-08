import { Stack } from "expo-router";
import FavoritesContextProvider from "@/context/favoritesContext";

export default function RootLayout() {
  return (
      // Le context englobe toute l'application
      <FavoritesContextProvider>
          <Stack>
              <Stack.Screen name="index" options={{ title: "Pictures" }} />
              <Stack.Screen name="picture/[id]" options={{ title: "Picture" }} />
          </Stack>
      </FavoritesContextProvider>

  );
}