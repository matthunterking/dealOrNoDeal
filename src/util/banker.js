import { bankerTurns } from '../constants/game';

const deductionPercentages = [0.4, 0.55, 0.6, 0.6, 0.85, 1];

export const offerDeal = (remainingValues, turnCounter) => {
 const sortedRemainingValues = remainingValues.sort((a, b) => a - b)
 const averageOfRemainingBoxes = Math.round(remainingValues.reduce((acc, value) => acc + value, 0) / remainingValues.length);
 const dealNumber = bankerTurns.indexOf(turnCounter);
 const gameDeduction = deductionPercentages[dealNumber];
 const randomFactor = (Math.floor(Math.random() * (11 - 9)) + 9) / 10;
 const newOffer = Math.round((averageOfRemainingBoxes * gameDeduction) * randomFactor);

 const heighestAmountLeft = sortedRemainingValues[sortedRemainingValues.length - 1];

 if (newOffer < 1) {
  if (heighestAmountLeft === 0.5) return 0.2
  return 0.05
 }

 return newOffer;
}
