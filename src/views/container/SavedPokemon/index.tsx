import React from 'react'
import { Pokemon } from '@app/domain/Pokemons/model/pokemon.model'
import { PokemonCard } from '@app/views/components/PokemonCard'
import { useSelector } from 'react-redux'
import { AppState, history } from '@app/store'
import './style.scss'
import pokemonService from '@app/domain/Pokemons/services'
interface SavedPokemonProps {

}

export const SavedPokemon: React.FC<SavedPokemonProps> = () => {
  const savedPokemon = useSelector<AppState, Pokemon[]>(state => state.pokemon.pokemonList)

  return (
    <section className="saved-pokemon">
      <h2>{savedPokemon.length ? 'Your Pokemons' : 'You dont have any Pokemon'}</h2>
      {
        savedPokemon.length ? (
          <div className="saved-pokemon__list">
            {

              savedPokemon.map((pokemon: Pokemon, idx: number) =>
                <PokemonCard key={idx} pokemon={pokemon} onClick={() => pokemonService.setSelectedPokemon(pokemon)} />
              )

            }
          </div>
        ) : (
            <div className="saved-pokemon__empty" onClick={() => history.push("/pokemon")}>
              <img src="/icons/ball.webp" />
              <h2>Start hunting!</h2>
            </div>


          )

      }

    </section>
  )
}