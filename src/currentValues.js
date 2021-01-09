import {getRandomTetrominoe} from "./functions/tetrimones";
import {elements} from "./functions/grid";

export const currentValues = {
  position: 4,
  rotation: 0,
  tetrominoe: getRandomTetrominoe(),
  elements: null
};

export const setValue = (key, value) => {
    currentValues[key] = value;
};

export const getCurrentValues = () => {
  return currentValues;
};
