import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Greeting } from "./screens/Greeting";
import { ChoseEvent } from "./screens/ChoseEvent";

const { Navigator, Screen } = createNativeStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Greeting"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Greeting" component={Greeting} />
        <Screen name="ChoseEvent" component={ChoseEvent} />
      </Navigator>
    </NavigationContainer>
  );
};
