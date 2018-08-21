import { Title } from "../actions";
import { TITLE } from "../constants/index";
import { IStoreState } from "../types/index";

export function title(state: IStoreState, action: Title): IStoreState {
  switch (action.type) {
    case TITLE:
      return { ...state, title: action.title };
    default:
      return state;
  }
}
