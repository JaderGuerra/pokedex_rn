import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { global } from "../theme/Apptheme";
import { usePokemonPaginated } from "../hooks/usePokemonPaginate";
import { PokemonCard } from "../components/PokemonCard";

export const HomeScreen = () => {
  const urlImg = require("../assets/pokebola.png");
  const { top } = useSafeAreaInsets();
  const { simplePokemonList, isloading, loadPokemons } = usePokemonPaginated();

  return (
    <>
      <Image source={urlImg} style={global.pokeBola} />

      <View style={{ alignItems: "center" }}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={(pokemon) => pokemon.id}
          numColumns={2}

          ListHeaderComponent={
            <Text
              style={{
                ...global.title,
                ...global.wrapper,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}
            >
              Pokedex
            </Text>
          }
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <ActivityIndicator style={{ height: 100 }} size={20} color="grey" />
          }
        />
      </View>
    </>
  );
};
