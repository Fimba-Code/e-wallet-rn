import React from "react";
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

interface Props {
  uri: string;
}

const MenuAvatar: React.FC<Props> = ({ uri }) => {
  return (
    <View
      style={{
        width: 43,
        height: 43,
        marginHorizontal: 13,
        borderRadius: 21.5,
        backgroundColor: Colors.darkBlue,
      }}
    >
      <Image
        source={{
          uri,
        }}
        style={{
          ...StyleSheet.absoluteFillObject,
          width: undefined,
          height: undefined,
          borderRadius: 21.5,
        }}
      />
    </View>
  );
};

export default MenuAvatar;
