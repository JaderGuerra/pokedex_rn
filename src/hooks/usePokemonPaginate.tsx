import { useEffect, useRef, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";
import {
  Pokemon,
  PokemonResponse,
  SimplePokemon,
} from "../interface/pokemonInterface";

export const usePokemonPaginated = () => {
  const nextPageUrl = useRef("https://pokeapi.co/api/v2/pokemon?limit=40");
  const [simplePokemonList, setsimplePokemonList] = useState<SimplePokemon[]>([]);

  const [isloading, setIsloading] = useState(true)

  const loadPokemons = async () => {
    setIsloading(true);
    const resp = await pokemonApi.get<PokemonResponse>(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;
    mapPokemontList(resp.data.results);
  };

  const mapPokemontList = (pokemonList: Pokemon[]) => {

    const newPokemontList:SimplePokemon[] = pokemonList.map(({name,url}) =>{
      
      const urlPaths = url.split('/')
      const id =  urlPaths[urlPaths.length - 2 ]
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      
      return{id,name,picture}

    })

    setsimplePokemonList([...simplePokemonList,...newPokemontList])
    setIsloading(false)

  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {isloading,simplePokemonList,loadPokemons};
};
