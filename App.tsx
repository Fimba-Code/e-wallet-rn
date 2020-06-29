import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Screens from "./src/screens";
import Main from "./src/navigation/HomeDrawer";
import StackOptions from "./src/constants/StackOptions";

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "@welcome";

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={INITIAL_ROUTE_NAME}
          screenOptions={StackOptions}
        >
          <Stack.Screen name="@welcome" component={Screens.Welcome} />
          <Stack.Screen name="@main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
