import React from "react";
import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import Colors from "../../constants/Colors";
import { Buttons } from "../../components";
import styles from "./styles";
const { height } = Dimensions.get("window");

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/artwork.png")}
        style={{ height, width: 120 }}
        resizeMode="cover"
      />

      <View style={styles.textContainer}>
        <View>
          <Image source={require("../../assets/logo.png")} />
          <Text style={styles.eWalleText}>eWallet</Text>
          <Text style={{ color: Colors.defaultText, fontSize: 16 }}>
            {`Open An Account For Digital\nE-Wallet Solutions. Instant Payouts.\n\n Join For Free.`}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Buttons.Default
            label="Sign in"
            icon="long-arrow-right"
            onPress={() => navigation.navigate("@main")}
          />
          <Buttons.Transparent label="Create an Account" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
