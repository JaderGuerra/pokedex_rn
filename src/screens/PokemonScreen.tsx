import { StackScreenProps } from "@react-navigation/stack";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParams } from "../navigator/StackNavigator";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FadeInImage } from "../components/FadeInImage";
import { usePokemon } from "../hooks/usePokemon";
import { PokemonDetails } from "../components/PokemonDetails";

interface Props extends StackScreenProps<RootStackParams, "PokemonScreen"> {}

export const PokemonScreen = ({ navigation, route }: Props) => {
  const { top } = useSafeAreaInsets();
  const { simplePokemon, color } = route.params;
  const { name, id, picture } = simplePokemon;
  const { isLoading, pokemon } = usePokemon(id);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ ...styles.headerContainer, backgroundColor: color }}>

          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ ...styles.backButton, top: top + 10 }}
          >
            <Ionicons name="md-arrow-back-outline" size={35} />
          </TouchableOpacity>
          <Text style={{ ...styles.pokemonName, top: top + 40 }}>
            {name} {"\n#" + id}
          </Text>
          <Image
            source={require("../assets/pokebola-blanca.png")}
            style={{ ...styles.pokebola }}
          />
          <FadeInImage uri={picture} style={{ ...styles.pokemonImg }} />

        </View>
          {isLoading ? (
            <View style={{ ...styles.activityIndicator }}>
              <ActivityIndicator color={color} size={50} />
            </View>
          ) : (
            <PokemonDetails pokemon={pokemon} />
          )}
      </View>

  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: "center",
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: "absolute",
    left: 20,
  },
  pokemonName: {
    fontSize: 20,
    color: "white",
    alignSelf: "flex-start",
    left: 20,
  },
  pokebola: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImg: {
    width: 250,
    height: 250,
    bottom: -15,
    position: "absolute",
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
