import React from 'react'
import { useSelector } from 'react-redux'
import { Pokemon } from '@app/domain/Pokemons/model/pokemon.model'
import { AppState } from '@app/store'

import './style.scss'
import { Accordion } from '@app/views/components/Accordion'



const PokemonDetail: React.FC<any> = () => {
  const pokemonDetail = useSelector<AppState, Pokemon>(state => state.pokemon.selected)
  const titleTemplate = (name: string, icon: string) => {
    return (

      <span className="detail-item">
        <img src={`/icons/${icon}`} />
        <p className="detail-item__title">{name}</p>
      </span>
    )
  }

  const listAbilities = (abilities: any) => {
    return (
      <ul>
        {abilities.map((val: any, idx: number) =>

          <li key={idx}>{val.ability.name}</li>

        )}
      </ul>
    )
  }
  const listType = (types: any) => {
    return (
      <ul>
        {types.map((val: any, idx: number) =>

          <li key={idx}>{val.type.name}</li>

        )}
      </ul>
    )
  }
  return (
    <React.Fragment>
      <div className="pokemon-detail">
        <img src={pokemonDetail.sprites.front_shiny} alt={pokemonDetail.name} />
        <h2>{pokemonDetail.name}</h2>
      </div>
      <div className="sprites-list">
        {
          Object.values(pokemonDetail.sprites).map(val =>
            val !== null && <img key={val} src={val} />

          )
        }
      </div>
      <Accordion
        key="abilities"
        title={titleTemplate('abilities', 'lightning.png')}
        children={listAbilities(pokemonDetail.abilities)}
      />
      <Accordion
        key="types"
        title={titleTemplate('types', 'category.png')}
        children={listType(pokemonDetail.types)}
      />
    </React.Fragment>

  )
}

export default PokemonDetail