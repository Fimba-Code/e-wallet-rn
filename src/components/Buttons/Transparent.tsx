import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Colors from "../../constants/Colors";

interface Props {
  label: string;
  onPress: () => void;
}

const Transparent: React.FC<Props> = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 10,
        alignItems: "center",
        flex: 1,
      }}
      onPress={() => (onPress ? onPress() : {})}
    >
      <Text style={{ color: Colors.blackText }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Transparent;
