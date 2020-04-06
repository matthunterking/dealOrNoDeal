export const offerDeal = (remainingValues) => {
 return Math.round(remainingValues.reduce((acc, value) => acc + value, 0) / remainingValues.length);
}
