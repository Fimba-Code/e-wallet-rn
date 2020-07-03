import React from "react";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { View, StyleSheet, Text, SafeAreaView, Dimensions } from "react-native";
import Colors from "../constants/Colors";
import Avatar from "./Avatars/Menu";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import NavigationList from "./Lists/NavigationList";
import Logout from "./Buttons/TransparentWithIcon";
import Constants from "expo-constants";
import helpers from "../helpers";

const { height } = Dimensions.get("window");

const CustomDrawer = () => {
  const navigation = useNavigation();
  const user = helpers.genActiveUser();

  return (
    <DrawerContentScrollView
      style={{
        backgroundColor: Colors.offWhite,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={style.headerContainer}>
          <View style={style.userBox}>
            <Avatar uri={user.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={style.userText}>{user.fullName}</Text>
              <Text style={style.locationText} numberOfLines={1}>
                {user.location}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
            style={{ marginRight: 20 }}
          >
            <MaterialCommunityIcons
              name="window-close"
              size={20}
              color={Colors.darkBlue}
            />
          </TouchableOpacity>
        </View>

        <NavigationList />
      </SafeAreaView>

      <View style={style.bottomContent}>
        <Logout onPress={() => {}} icon="md-log-out" label="Logout" />
        <Text
          style={{ color: Colors.darkBlue, fontSize: 9, marginTop: 40 }}
        >{`Version ${Constants.manifest.version}`}</Text>
      </View>
    </DrawerContentScrollView>
  );
};

const style = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 50,
  },
  userBox: {
    backgroundColor: Colors.white,
    paddingVertical: 30,
    flexDirection: "row",
    borderBottomRightRadius: 60,
    alignItems: "center",
    width: 250,
  },
  userText: {
    fontWeight: "700",
    color: Colors.blackText,
  },
  locationText: {
    fontSize: 10,
    marginTop: 4,
    color: Colors.darkBlue,
  },
  bottomContent: {
    position: "absolute",
    top: height - 160,
    paddingHorizontal: 20,
  },
});

export default CustomDrawer;
