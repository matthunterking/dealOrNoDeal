import { values } from '../constants/game';
import { playerImages } from '../constants/players';

export const generatePlayers = () => {
 // randomly select a 21 player pics
 // randomly assign player sayings
 // return [ player ]
 console.log('in generate players');

 return playerImages.sort((a, b) => 0.5 - Math.random()).slice(0, 22);
}

export const generateBoxes = () => {
 const players = generatePlayers();
 return values.sort((a, b) => 0.5 - Math.random()).map((value, index) => {
  return { boxNumber: index + 1, value, isOpened: false, player: players[index] }
 });
}

export const generateOtherBoxes = (selectedBox) => {
 return new Array(22).fill('').map((b, index) => index + 1).filter(boxNumber => boxNumber !== selectedBox);
}
