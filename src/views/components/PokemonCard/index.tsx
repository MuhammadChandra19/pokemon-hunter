import React, { useEffect, useState } from 'react'
import { Pokemon } from '@app/domain/Pokemons/model/pokemon.model';

import './style.scss'
import { ImageViewer } from '../ImageViewer';
import { getImageColor, getImageColorProps } from '@app/untilities/extrafunction/getImageColor';
interface PokemonCardProps {
  pokemon: Pokemon;
  onClick?: () => any;

}


export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onClick }) => {

  const [bgCard, setBg] = useState<getImageColorProps>({ r: 0, g: 0, b: 0 })

  const getAvgColor = () => {
    var img = new Image()
    img.crossOrigin = "";
    img.onload = () => {
      // bgCard = getImageColor(img)
      setBg(getImageColor(img))
    }
    img.src = pokemon.sprites.front_shiny
  }

  useEffect(() => {
    getAvgColor()
  }, [])

  return (
    <div className="pokemon-card" style={{ backgroundColor: `rgb(${bgCard.r},${bgCard.g},${bgCard.b} )`, margin: 2 }} key={pokemon.id} onClick={onClick}>
      <ImageViewer
        imgUrl={pokemon.sprites.front_shiny}
        className="pokemon-card__sprite"
      />
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