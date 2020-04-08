import { bankerTurns } from '../constants/game';

export const offerDeal = (remainingValues, turnCounter) => {
 let offer = Math.round(remainingValues.reduce((acc, value) => acc + value, 0) / remainingValues.length);
 const percentageThroughGame = Math.round((bankerTurns.indexOf(turnCounter) + 1) / bankerTurns.length)
 const tenPercentOfOffer = (offer / 100) * 10;
 const fivePercentOfOffer = (offer / 100) * 5;

 offer = percentageThroughGame > 0.5 ? offer / 2 : offer + tenPercentOfOffer;

 offer = Math.random() > 0.75 ? offer + fivePercentOfOffer : offer - fivePercentOfOffer;

 if (offer > 99) {
  offer = Math.ceil(offer / 100) * 100;
 } else {
  offer = Math.ceil(offer / 10) * 10;
 }

 return offer;
}
