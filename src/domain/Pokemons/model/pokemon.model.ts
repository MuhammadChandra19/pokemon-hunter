
import { Sprites } from "./sprites.model";

export interface Pokemon {
  id: number;
  name: string;
  weight: string;
  types: Array<any>;
  sprites: Sprites;
  height: number;
  abilities: Array<any>;
}