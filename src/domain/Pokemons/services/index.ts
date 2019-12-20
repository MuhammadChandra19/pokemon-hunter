import { BaseService } from "@app/untilities/redux/baseService";
import api from "@app/api";
import { Pokemon } from "../model/pokemon.model";
import { GET_POKEMON, SAVE_POKEMON, SAVE_BULK_POKEMON, SET_SELECTED_POKEMON } from "../redux/actions";
import { SET_INITIAL_SAVE } from "@app/domain/common/actions";
import { AppStore, history } from "@app/store";

class PokemonService extends BaseService {

  public getPokemon = async (): Promise<Pokemon> => {
    this.setLoading(GET_POKEMON, true)
    const response = await api.pokemonApi.getPokemon(this.pokemonId())
    const { sprites } = response
    const pokemon: Pokemon = {
      id: response.id,
      name: response.name,
      abilities: response.abilities,
      height: response.height,
      sprites: sprites,
      types: response.types,
      weight: response.weight
    }

    this.dispatch(GET_POKEMON, pokemon)
    this.setLoading(GET_POKEMON, false)
    return pokemon
  }

  loadPokemonFromLocalStorage = () => {

  }

  public savePokemon = async (pokemon: Pokemon) => {

    this.setLoading(SAVE_POKEMON, true)
    this.dispatch(SAVE_POKEMON, pokemon)

    let pokemonList = [];
    if (localStorage.getItem("pokemonList") === null) {
      pokemonList.push(pokemon)
    }
    else {
      pokemonList = [pokemon, ...JSON.parse(localStorage.getItem('pokemonList'))]
    }

    localStorage.setItem("pokemonList", JSON.stringify(pokemonList))
    await this.getPokemon()
    this.setLoading(SAVE_POKEMON, false)



  }

  public initialSave = () => {
    if (localStorage.getItem("pokemonList") !== null && !AppStore.getState().pokemon.pokemonList.length) {

      const savedPokemon = JSON.parse(localStorage.getItem('pokemonList'))

      this.dispatch(SAVE_BULK_POKEMON, savedPokemon)

      savedPokemon.forEach((pokemon: Pokemon) => this.setState(`'${pokemon.id}'`, true))

      this.setState(SET_INITIAL_SAVE, true)
    }
  }

  public setSelectedPokemon = (pokemon: Pokemon) => {
    this.dispatch(SET_SELECTED_POKEMON, pokemon)
    history.push("/pokemon-detail")
  }

  private pokemonId = (): number => {
    const min = Math.ceil(1)
    const max = Math.floor(151)
    const result = Math.floor(Math.random() * (max - min + 1)) + min


    const availableKey = AppStore.getState().common.commonState[result]
    if (availableKey) {
      console.log('executed')
      return this.pokemonId()
    }

    this.setState(result, true)
    return result
  }
}

const pokemonService = new PokemonService()

export default pokemonService