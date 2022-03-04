import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";

import theme from "./src/styles/theme";

import AppLoading from "expo-app-loading";

import { useFonts } from "expo-font";
import {
  Epilogue_400Regular,
  Epilogue_500Medium,
  Epilogue_600SemiBold,
  Epilogue_700Bold,
  Epilogue_800ExtraBold,
} from "@expo-google-fonts/epilogue";
import {
  Rajdhani_400Regular,
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

import { Router } from "./src/router";

export default function App() {
  let [fontsLoaded] = useFonts({
    Epilogue_400Regular,
    Epilogue_500Medium,
    Epilogue_600SemiBold,
    Epilogue_700Bold,
    Epilogue_800ExtraBold,
    Rajdhani_400Regular,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Router />
      <StatusBar barStyle="light-content" backgroundColor="#282828" />
    </ThemeProvider>
  );
}
