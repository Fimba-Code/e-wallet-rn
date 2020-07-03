import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { Separators, Buttons, Lists, Header } from "../../components";
import Colors from "../../constants/Colors";
import styles from "./styles";
import helpers from "../../helpers";
import services from "../../mock/services.json";

const buttonAdd = {
  id: "1",
  fullName: "template",
  avatar: "",
};

const Home = ({ navigation }) => {
  const accountBalance = helpers.genAccountBalance(100, 12000);
  const friends = helpers.genFriendsList();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <Header.Default
        openDrawer={() => navigation.dispatch(DrawerActions.openDrawer())}
      />

      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        <Separators.Default label="Account Overview" />
        <View style={styles.balanceContainer}>
          <View>
            <Text style={styles.currentAmountValeuText}>{accountBalance}</Text>
            <Text style={styles.currentAmountLabelText}>Current Balance</Text>
          </View>
          <Buttons.AddNew onPress={() => {}} />
        </View>

        <Separators.Default label="Send Money" />
        <Lists.FriendsList list={[buttonAdd, ...friends]} />

        <Separators.Default label="Services" />
        <Lists.ServicesList list={services} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
