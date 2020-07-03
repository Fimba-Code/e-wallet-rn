import { Platform } from "react-native";

const getHeaderContainerStyle = (nomargin: boolean) => ({
  ...Platform.select({
    android: { marginTop: nomargin ? 0 : 24 },
  }),
});

export default getHeaderContainerStyle;
