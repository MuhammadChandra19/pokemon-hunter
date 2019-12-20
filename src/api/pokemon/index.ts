import { BaseApi } from "../base.api";
import { Pokemon } from "@app/domain/Pokemons/model/pokemon.model";


export default class PokemonApi extends BaseApi {
  constructor() {
    super('pokemon/')
  }



  public async getPokemon(url: any = '', query: any = {}): Promise<Pokemon> {
    return this.make('GET', url, query)
  }
}