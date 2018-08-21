import * as constants from "../constants";

export interface ITitle {
  title: string;
  type: constants.TITLE;
}

export type Title = ITitle;

export function setTitle(title: string): ITitle {
  return {
    title,
    type: constants.TITLE
  };
}
