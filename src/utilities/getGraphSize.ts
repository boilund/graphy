export interface Isize {
  width: number;
  height: number;
}

const baseSize = {
  xs: { width: 350, height: 350 },
  // tslint:disable-next-line:object-literal-sort-keys
  sm: { width: 600, height: 600 },
  md: { width: 800, height: 800 },
  lg: { width: 1000, height: 1000 },
  xl: { width: 1200, height: 1200 },
  default: { width: 1000, height: 1000 }
};

const createPageColumn = {
  xs: 12,
  // tslint:disable-next-line:object-literal-sort-keys
  sm: 12,
  md: 6,
  lg: 6,
  xl: 6
};

const myPageColumn = {
  xs: 6,
  // tslint:disable-next-line:object-literal-sort-keys
  sm: 4,
  md: 4,
  lg: 4,
  xl: 4
};

const getGridTitle = (windowWidth: number): string => {
  if (windowWidth < 576) {
    return "xs";
  } else if (windowWidth < 768) {
    return "sm";
  } else if (windowWidth < 992) {
    return "md";
  } else if (windowWidth < 1200) {
    return "lg";
  } else if (windowWidth >= 1200) {
    return "xl";
  } else {
    return "default";
  }
};

export const getGraphSize = (windowWidth: number, page: string): Isize => {
  const title = getGridTitle(windowWidth);
  const base = baseSize[title];
  const column =
    page === "create-page" ? createPageColumn[title] : myPageColumn[title];

  return {
    height: base.width * (column / 12),
    width: base.width * (column / 12)
  };
};
