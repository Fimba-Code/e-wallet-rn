import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as Screen from "../screens";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();
const INITIAL_ROUTE_NAME = "@home";

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      drawerType="slide"
      backBehavior="initialRoute"
      screenOptions={{
        gestureEnabled: true,
        swipeEnabled: true,
      }}
      drawerStyle={{ width: "100%" }}
      drawerContent={(props) => <CustomDrawer />}
    >
      <Drawer.Screen name="@home" component={Screen.Home} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
