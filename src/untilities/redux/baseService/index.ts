import { Store } from 'redux'
import { SET_LOADING, SET_INITIAL_SAVE } from '@app/domain/common/actions'
import { AppState, AppStore } from "@app/store"

export class BaseService {
  private store: Store;

  constructor() {
    this.store = AppStore;
  }

  protected setLoading(action: string, loading: boolean): void {
    this.dispatch(SET_LOADING, {
      key: action,
      value: loading,
    });
  }

  protected setState(action: any, initialSave: boolean): void {
    this.dispatch(SET_INITIAL_SAVE, {
      key: action,
      value: initialSave,
    });
  }

  protected getState(): Readonly<AppState> {
    return this.store.getState();
  }

  protected dispatch(type: string, payload: any): void {
    this.store.dispatch({ type, payload });
  }
}