import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParams } from "../StackNavigator";
import { PokemonScreen, SearchScreen } from "../../screens";

const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
  return (
    <Tab2.Navigator screenOptions={{ headerShown: false }}>
      <Tab2.Screen name="HomeScreen" component={SearchScreen} />
      <Tab2.Screen name="PokemonScreen" component={PokemonScreen} />
    </Tab2.Navigator>
  );
};