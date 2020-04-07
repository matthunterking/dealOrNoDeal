export const formatToCurrency = (number) => {
 if (number < 1) return `${number * 100}p`;
 if (number > 999) return `£${number / 1000},000`;
 return `£${number}`
}
