import { RouteItem } from '@app/untilities/router/route.item'

export const routeList: Array<RouteItem> = [
  {
    key: 'Home',
    text: 'Home',
    path: '/',
    component: 'views/pages/Home'
  },
  {
    key: 'Pokemon',
    text: 'Your Pokemons',
    path: '/pokemon',
    component: 'views/pages/Pokemon'
  },
  {
    key: 'Detail',
    text: 'PokemonDetail',
    path: '/pokemon-detail',
    component: 'views/pages/PokemonDetail'
  }
]