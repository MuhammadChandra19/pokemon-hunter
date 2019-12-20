import React from 'react'
import { Pokemon } from '@app/domain/Pokemons/model/pokemon.model';

import './style.scss'
import { ImageViewer } from '../ImageViewer';
interface PokemonCardProps {
  pokemon: Pokemon;
  onClick?: () => any;
  showDetail?: boolean;
}


export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onClick, showDetail = true }) => {
  return (
    <div className="pokemon-card" key={pokemon.id} onClick={onClick}>
      <ImageViewer
        imgUrl={pokemon.sprites.front_shiny}
        className="pokemon-card__sprite"
      />
      {/* <img
        src={pokemon.sprites.front_shiny}
        alt={pokemon.name}
        className="pokemon-card__sprite"
      /> */}

      <h3 className="pokemon-card__name">
        {pokemon.name}
      </h3>
      <div className="pokemon-card__detail">
        <div className="pokemon-card__detail__list">
          <img src="/icons/lightning.png" />
          <p>{pokemon.abilities.length}</p>
        </div>
        <div className="pokemon-card__detail__list">
          <img src="/icons/category.png" />
          <p>{pokemon.types.length}</p>
        </div>

      </div>
    </div>
  )
}