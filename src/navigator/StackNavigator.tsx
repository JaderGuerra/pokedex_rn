import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, PokemonScreen } from "../screens";
import { SimplePokemon } from "../interface/pokemonInterface";


export type RootStackParams= {
  HomeScreen:undefined,
  PokemonScreen:{simplePokemon:SimplePokemon,color?: string}
}
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
};
