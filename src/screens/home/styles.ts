import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  balanceContainer: {
    backgroundColor: Colors.offWhite,
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: "row",
    marginHorizontal: 13,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  currentAmountValeuText: {
    color: Colors.blackText,
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
  },
  currentAmountLabelText: {
    color: Colors.darkBlue,
    fontSize: 12,
  },
});

export default styles;
