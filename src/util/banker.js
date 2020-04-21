import { bankerTurns } from '../constants/game';

//[5, 8, 11, 14, 17, 20]

// 1 lower then increase

// 6 offers 6 = 1 

/// 6
// 1 - 20% av £7k max £24 / 33274 
// 2 - 30% av 11k
// 3 - 60% av 13k
// 4 - 60% av 13k
// 5 - 85% av 16k
// 6 - 100% middle

// 3899 => 3900
// 345 => 350
// 34 => 35

const deductionPercentages = [0.4, 0.55, 0.6, 0.6, 0.85, 1];

export const offerDeal = (remainingValues, turnCounter) => {
 const sortedRemainingValues = remainingValues.sort((a, b) => a - b)
 const averageOfRemainingBoxes = Math.round(remainingValues.reduce((acc, value) => acc + value, 0) / remainingValues.length);
 const dealNumber = bankerTurns.indexOf(turnCounter);
 const gameDeduction = deductionPercentages[dealNumber];
 const randomFactor = (Math.floor(Math.random() * (11 - 9)) + 9) / 10;
 const newOffer = Math.round((averageOfRemainingBoxes * gameDeduction) * randomFactor);

 const lowestAmountLeft = sortedRemainingValues[0];
 const heighestAmountLeft = sortedRemainingValues[sortedRemainingValues.length - 1];
 console.log('sortedRemainingValues', sortedRemainingValues);
 console.log('lowestAmountLeft', lowestAmountLeft);
 console.log('heighestAmountLeft', heighestAmountLeft);

 console.log('averageOfRemainingBoxes -> ', averageOfRemainingBoxes);
 console.log('dealNumber -> ', dealNumber);
 console.log('gameDeduction -> ', gameDeduction);
 console.log('randomFactor -> ', randomFactor);
 console.log('newOffer -> ', Math.round(newOffer));

 if (newOffer < 1) {
  if (heighestAmountLeft === 0.5) return 0.2
  return 0.05
 }

 return newOffer;
}
