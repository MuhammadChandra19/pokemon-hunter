import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
  ReducersMapObject,
  Store,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import CommonState from "./domain/common/states"
import { CommonReducerBuild } from "./domain/common/reducers"
import { PokemonState } from '@app/domain/Pokemons/redux/states'
import { PokemonReducerBuild } from './domain/Pokemons/redux/reducers';
import { History, createBrowserHistory } from 'history';


export interface AppState {
  common: CommonState;
  pokemon: PokemonState;

}

export const logger: Middleware = () => (next) => (action) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(action);
  }
  return next(action);
};


const configureStore = (): Store<AppState> => {
  let middleware = applyMiddleware(logger);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  let rootReducer: ReducersMapObject<AppState, any> = {
    common: CommonReducerBuild,
    pokemon: PokemonReducerBuild

  }

  return createStore(combineReducers<AppState>(rootReducer), middleware);
}

export const history: History = createBrowserHistory({ basename: '/' });

export const AppStore = configureStore();