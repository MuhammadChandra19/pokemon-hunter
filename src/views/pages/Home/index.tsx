import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { AppState } from 'store';

// import { Pokemon } from '@app/domain/Pokemons/model/pokemon.model';
import pokemonService from '@app/domain/Pokemons/services';

import './style.scss'
// import { AppConfig } from '@app/constant/app.config';
import { SavedPokemon } from '@app/views/container/SavedPokemon';
import { SET_INITIAL_SAVE } from '@app/domain/common/actions';
// import { GET_POKEMON } from '@app/domain/Pokemons/redux/actions';

interface HomeProps {

  initialSaveExecuted: boolean
}



const HomePage: React.FC<HomeProps> = ({ }) => {
  const homeProps = useSelector<AppState, HomeProps>(state => (
    {
      initialSaveExecuted: state.common.commonState[SET_INITIAL_SAVE]
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
    initialSave()

  }, [])

  return (
    <React.Fragment>
      <SavedPokemon />
    </React.Fragment>


  )
}

export default HomePage