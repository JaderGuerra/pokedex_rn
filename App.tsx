import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from "./src/navigator/Tabs/Tab1";

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
