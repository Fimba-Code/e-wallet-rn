import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  label: string;
  icon: string;
  onPress: () => void;
}

const Transparent: React.FC<Props> = ({ label, onPress, icon }) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 10,
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
      }}
      onPress={() => (onPress ? onPress() : {})}
    >
      <Ionicons name={icon} color={Colors.blackText} size={16} />
      <Text
        style={{ color: Colors.blackText, fontWeight: "bold", marginLeft: 10 }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Transparent;
