export const formatToCurrency = (number) => {
 if (number < 1) return `${number * 100}p`;
 if (number > 999) {
  const thousands = Math.floor(number / 1000);
  const hundreds = Math.floor((number % 1000) / 100);
  return `£${thousands},${hundreds}00`
 };
 return `£${number}`
}
