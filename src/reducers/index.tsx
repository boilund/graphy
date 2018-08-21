import { SetTitle } from "../actions";
import { SET_TITLE } from "../constants/index";
import { IStoreState } from "../types/index";

export function title(state: IStoreState, action: SetTitle): IStoreState {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.title };
    default:
      return state;
  }
}
