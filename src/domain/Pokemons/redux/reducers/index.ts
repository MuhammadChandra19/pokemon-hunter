import { Reducer } from "@app/untilities/redux/reducer";
import { PokemonState } from "../states";
import { Pokemon } from "../../model/pokemon.model";
import { GET_POKEMON, SAVE_POKEMON, SAVE_BULK_POKEMON, SET_SELECTED_POKEMON } from "../actions";

export class PokemonReducer extends Reducer<PokemonState> {
  constructor() {
    super({
      pokemon: {} as Pokemon,
      pokemonList: [],
      selected: {} as Pokemon
    })
  }


  public getPokemon(state: PokemonState, pokemon: Pokemon): PokemonState {
    return {
      ...state,
      pokemon
    }
  }

  public savePokemon(state: PokemonState, pokemon: Pokemon): PokemonState {
    return {
      ...state,
      pokemonList: [pokemon, ...state.pokemonList]
    }
  }

  public saveBulkPokemon(state: PokemonState, pokemons: Pokemon[]): PokemonState {
    return {
      ...state,
      pokemonList: [...state.pokemonList, ...pokemons]
    }
  }

  public setSelectedPokemon(state: PokemonState, selected: Pokemon): PokemonState {
    return {
      ...state,
      selected
    }
  }

  get actions(): {
    [p: string]: (state: PokemonState, payload?: any) => any;
  } {
    return {
      [GET_POKEMON]: this.getPokemon,
      [SAVE_POKEMON]: this.savePokemon,
      [SAVE_BULK_POKEMON]: this.saveBulkPokemon,
      [SET_SELECTED_POKEMON]: this.setSelectedPokemon

    }
  }
}

export const PokemonReducerBuild = new PokemonReducer().build()

