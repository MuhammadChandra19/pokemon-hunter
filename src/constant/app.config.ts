export const AppConfig = {
  API_URL: process.env.API_URL,
  PUBLIC_PATH: process.env.PUBLIC_PATH,
  URL_PNG: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
};
export const PUBLIC_URL = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_PATH : ''