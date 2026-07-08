import { Stack } from "expo-router";
import { Provider } from 'react-redux';
import {store} from "@/store/store";

export default function RootLayout() {
  return (
      // Le context englobe toute l'application (Context React)
      // <FavoritesContextProvider>

      // Fourni le store Redux à l'application
      <Provider store={store}>
          <Stack>
              <Stack.Screen name="index" options={{ title: "Pictures" }} />
              <Stack.Screen name="picture/[id]" options={{ title: "Picture" }} />
          </Stack>
      </Provider>
      // </FavoritesContextProvider>
  );
}