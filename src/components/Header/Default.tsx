import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import getHeaderContainerStyle from "./getHeaderContainerStyle";
import Colors from "../../constants/Colors";

interface Props {
  nomargin?: boolean | undefined;
  openDrawer: () => void;
}

const MainHeader: React.FC<Props> = ({ nomargin = false, openDrawer }) => (
  <View
    style={[
      {
        height: 45,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 13,
      },
      getHeaderContainerStyle(nomargin),
    ]}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={require("../../assets/logo.png")}
        resizeMode="contain"
        style={{ width: 40 }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          marginLeft: 10,
          color: Colors.blackText,
        }}
      >
        eWallet
      </Text>
    </View>
    <TouchableOpacity onPress={openDrawer}>
      <AntDesign name="appstore1" size={24} color={Colors.darkBlue} />
    </TouchableOpacity>
  </View>
);

export default MainHeader;
