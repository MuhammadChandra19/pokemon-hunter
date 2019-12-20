import { Pokemon } from "../../model/pokemon.model";

export interface PokemonState {
  pokemon: Pokemon
  pokemonList: Pokemon[]
  selected: Pokemon
}