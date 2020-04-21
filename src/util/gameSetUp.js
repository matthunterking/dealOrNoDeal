import { values } from '../constants/game';
import { playerImages, playerPhrases } from '../constants/players';

const generatePlayers = () => {
 const numberOfPhrases = 14;
 const randomPhrases = playerPhrases.sort((a, b) => 0.5 - Math.random())
  .slice(0, numberOfPhrases);

 return playerImages
  .map((image, index) => {
   const phrase = index < numberOfPhrases ? randomPhrases[index] : null
   return { image, phrase }
  })
  .sort((a, b) => 0.5 - Math.random())
  .slice(0, 22)
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
