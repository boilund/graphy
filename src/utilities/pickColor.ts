const colors = ["#55848A", "#FC7849", "#FB5154", "#FDCC60", "#95B15E"];

export const pickColor = (): string => {
  const index = Math.floor(Math.random() * Math.floor(4));
  return colors[index];
};
