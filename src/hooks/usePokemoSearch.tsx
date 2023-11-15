import { useEffect, useRef, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";
import {
  Pokemon,
  PokemonResponse,
  SimplePokemon,
} from "../interface/pokemonInterface";

export const usePokemoSearch = () => {
  const [isFetching, setIsFetching] = useState(true)
  const [simplePokemonList, setsimplePokemonList] = useState<SimplePokemon[]>([]);


  const loadPokemons = async () => {
    const resp = await pokemonApi.get<PokemonResponse>("https://pokeapi.co/api/v2/pokemon?limit=1200");
    mapPokemontList(resp.data.results);
  };

  const mapPokemontList = (pokemonList: Pokemon[]) => {

    const newPokemontList:SimplePokemon[] = pokemonList.map(({name,url}) =>{
      
      const urlPaths = url.split('/')
      const id =  urlPaths[urlPaths.length - 2 ]
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      
      return{id,name,picture}

    })

    setsimplePokemonList(newPokemontList)
    setIsFetching(false)

  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {isFetching,simplePokemonList};
};
