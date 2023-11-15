import { Dimensions, FlatList, Platform, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SearchInput } from "../components/SearchInput";
import { usePokemoSearch } from "../hooks/usePokemoSearch";
import { Loading } from "../components/Loading";
import { global } from "../theme/Apptheme";
import { PokemonCard } from "../components/PokemonCard";
import { useEffect, useState } from "react";
import { SimplePokemon, Pokemon } from "../interface/pokemonInterface";

const { width } = Dimensions.get("window");

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = usePokemoSearch();
  const [term, setTerm] = useState("");
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    if (term.length === 0) setPokemonFiltered([]);

    if (isNaN(Number(term))) {
      setPokemonFiltered(
        simplePokemonList.filter((pokemon) =>
          pokemon.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        )
      );
    }

    
  }, [term]);

  if (isFetching) return <Loading />;

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
      }}
    >
      <SearchInput
        onDebounce={(value) => setTerm(value)}
        style={{
          position: "absolute",
          zIndex: 999,
          width: width - 40,
          top: Platform.OS === "ios" ? top : top + 10,
        }}
      />

      <FlatList
        data={pokemonFiltered}
        keyExtractor={(pokemon) => pokemon.id}
        numColumns={2}
        ListHeaderComponent={
          <Text
            style={{
              ...global.title,
              ...global.wrapper,
              paddingBottom: 10,
              marginTop: Platform.OS === "ios" ? top + 60 : top + 70,
            }}
          >
            {term}
          </Text>
        }
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
