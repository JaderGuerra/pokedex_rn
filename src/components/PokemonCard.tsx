import { useEffect, useState, useRef } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SimplePokemon } from "../interface/pokemonInterface";
import { FadeInImage } from "./FadeInImage";
const { width } = Dimensions.get("window");

import ImageColors from "react-native-image-colors";

import { useNavigation,NavigationProp,ParamListBase } from "@react-navigation/native";
interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const [bgColor, setbgColor] = useState("grey");
  const isMounted = useRef(true);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, { fallback: "grey" })
      .then((colors) => {
        if (!isMounted.current) return;

        if (colors.platform !== "ios") {

          setbgColor(colors.dominant as string);
        } /* else {
          setbgColor(colors.dominant || "grey");
        } */
      })
      .catch((e) => console.log(e));

    return () => {
      isMounted.current = false;
    };
  }, []);


  return (
    <TouchableOpacity
      style={{
        ...styles.cardContainer,
        width: width * 0.4,
        backgroundColor: bgColor,
      }}
      onPress={() =>
        navigation.navigate("PokemonScreen", {
          simplePokemon: pokemon,
          color: bgColor,
        })
      }
    >
      <View>
        <Text style={styles.name}>
          {pokemon.name} {"\n#" + pokemon.id}
        </Text>
      </View>
      <View style={styles.pokebolaContainer}>
        <Image
          style={styles.pokebola}
          source={require("../assets/pokebola-blanca.png")}
        />
      </View>
      <FadeInImage uri={pokemon.picture} style={styles.pokemonImg} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: 150,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    top: 10,
    left: 20,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: "absolute",
    right: -20,
    bottom: -20,
  },
  pokemonImg: {
    width: 120,
    height: 120,
    position: "absolute",
    right: -5,
    bottom: -5,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 0,
    right: 0,
    opacity: 0.5,
    overflow: "hidden",
  },
});
