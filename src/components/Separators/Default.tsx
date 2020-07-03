import React from "react";
import { View, Text } from "react-native";
import Colors from "../../constants/Colors";

interface Props {
  label: string;
}

const Default: React.FC<Props> = ({ label }) => {
  return (
    <View style={{ paddingHorizontal: 13, marginBottom: 15 }}>
      <Text style={{ color: Colors.darkBlue, fontWeight: "bold" }}>
        {label}
      </Text>
    </View>
  );
};

export default Default;
