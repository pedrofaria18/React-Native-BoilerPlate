import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <Navigator>
        {/* <Screen name="Home" component={HomeScreen} /> */}
      </Navigator>
    </NavigationContainer>
  );
};
