import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";

import theme from "./src/styles/theme";

import AppLoading from "expo-app-loading";

import { useFonts } from "expo-font";

import { Router } from "./src/router";

export default function App() {
  let [fontsLoaded] = useFonts({
    // import fonts here
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Router />
      <StatusBar barStyle="light-content" />
    </ThemeProvider>
  );
}
