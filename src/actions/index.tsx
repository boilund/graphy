import * as constants from "../constants";

export interface ISetTitle {
  title: string;
  type: constants.SET_TITLE;
}

export type SetTitle = ISetTitle;

export function setTitle(title: string): ISetTitle {
  return {
    title,
    type: constants.SET_TITLE
  };
}
