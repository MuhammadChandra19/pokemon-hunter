import React from 'react'
import SwitchRoute from '../components/SwitchRoute'
import { routeList } from '@app/routes/routelist'
import './style.scss'
import { history, AppState } from '@app/store'
import { useSelector } from 'react-redux'
import { Pokemon } from '@app/domain/Pokemons/model/pokemon.model'



export const Layout: React.FC<any> = () => {

  const pokemonList = useSelector<AppState, Pokemon[]>(state => state.pokemon.pokemonList)

  return (
    <div className="app-container">
      <header className="pokemon-header">
        <img src="/icons/logo.jpg" onClick={() => history.push("/")} />
        {
          pokemonList.length && history.location.pathname.split("/")[1] !== "pokemon" ? (<img src="/icons/ball.webp" onClick={() => history.push("/pokemon")} />) : (null)
        }
      </header>
      <SwitchRoute routes={routeList} />
    </div>
  )
}
