export const AppConfig = {
  API_URL: 'https://pokeapi.co/api/v2/',
  PUBLIC_PATH: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female',
  URL_PNG: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
};
export const PUBLIC_URL = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_PATH : ''