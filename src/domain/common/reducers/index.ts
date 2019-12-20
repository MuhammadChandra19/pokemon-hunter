import { Reducer } from "@app/untilities/redux/reducer";
import CommonState from "../states";
import { SET_LOADING, SET_INITIAL_SAVE } from "../actions";

export class CommonReducer extends Reducer<CommonState> {
  constructor() {
    super({
      loading: {},
      commonState: {}
    })
  }

  public setLoading(state: CommonState, payload: any): CommonState {
    return {
      ...state,
      loading: {
        ...state.loading,
        [payload.key]: payload.value
      }
    }
  }

  public setState(state: CommonState, payload: any): CommonState {
    return {
      ...state,
      commonState: {
        ...state.commonState,
        [payload.key]: payload.value
      }
    }
  }


  get actions(): {
    [p: string]: (state: CommonState, payload?: any) => CommonState;
  } {
    return {
      [SET_LOADING]: this.setLoading,
      [SET_INITIAL_SAVE]: this.setState
    };
  }
}

export const CommonReducerBuild = new CommonReducer().build()