import { values } from '../constants/game';

export const generateBoxes = () => {
 return values.sort((a, b) => 0.5 - Math.random()).map((value, index) => {
  return { boxNumber: index + 1, value, isOpened: false }
 });
}

export const generateOtherBoxes = (selectedBox) => {
 return new Array(22).fill('').map((b, index) => index + 1).filter(boxNumber => boxNumber !== selectedBox);
}
