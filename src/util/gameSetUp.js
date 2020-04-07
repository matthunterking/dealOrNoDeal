import { values } from '../constants/game';

export const generateBoxes = () => {
 return values.sort((a, b) => 0.5 - Math.random()).reduce((acc, value, index) => {
  acc[index + 1] = value;
  return acc;
 }, {});
}

export const generateOtherBoxes = (selectedBox) => {
 return new Array(22).fill('').map((b, index) => index + 1).filter(boxNumber => boxNumber !== selectedBox);
}
