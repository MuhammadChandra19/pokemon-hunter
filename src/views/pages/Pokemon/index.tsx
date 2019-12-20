import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { AppState } from 'store';

import { Pokemon } from '@app/domain/Pokemons/model/pokemon.model';
import pokemonService from '@app/domain/Pokemons/services';

import './style.scss'
import { AppConfig } from '@app/constant/app.config';
import { SavedPokemon } from '@app/views/container/SavedPokemon';
import { SET_INITIAL_SAVE } from '@app/domain/common/actions';
import { SAVE_POKEMON } from '@app/domain/Pokemons/redux/actions';

// import { GET_POKEMON } from '@app/domain/Pokemons/redux/actions';

interface MyPokemonProps {
  pokemon: Pokemon;
  pokemonList: Pokemon[];
  initialSaveExecuted: boolean;
  isLoading: boolean;
}



const CatchPokemon: React.FC<MyPokemonProps> = ({ }) => {
  const homeProps = useSelector<AppState, MyPokemonProps>(state => (
    {
      pokemon: state.pokemon.pokemon,
      pokemonList: state.pokemon.pokemonList,
      initialSaveExecuted: state.common.commonState[SET_INITIAL_SAVE],
      isLoading: state.common.loading[SAVE_POKEMON]

    }
  ))
  // const isLoading = useSelector<AppState, boolean>(state => state.common.loading[GET_POKEMON])
  // console.log(pokemonList.sprites.back_default)

  const initialSave = async () => {
    if (!homeProps.initialSaveExecuted) {
      pokemonService.initialSave()
    }
  }

  useEffect(() => {
    pokemonService.getPokemon()
    initialSave()
  }, [])

  const savePokemon = async () => {
    await pokemonService.savePokemon(homeProps.pokemon)
  }

  return (
    <React.Fragment>
      <section className="wild-pokemon">
        <h2>Wild Encounter</h2>
        <img
          src={`${AppConfig.URL_PNG}/${homeProps.pokemon.id}.png`}
          alt={homeProps.pokemon.name}
          className="wild-pokemon__sprite"
        />
        <h3>?</h3>
        <div className="wild-pokemon__button">
          <button className="wild-pokemon__button__skip" onClick={() => pokemonService.getPokemon()}>SKIP</button>
          <button disabled={homeProps.isLoading} className="wild-pokemon__button__catch" onClick={() => savePokemon()}>
            CATCH
          </button>
        </div>
      </section>

      <SavedPokemon />
    </React.Fragment>


  )
}

export default CatchPokemon