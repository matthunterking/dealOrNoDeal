import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

const updateHighScoreList = async (newList) => {
 try {
  const updatedList = JSON.stringify(newList);

  await AsyncStorage.setItem('highScores', updatedList);
 } catch (e) {
  console.log('error in updating new list!');
 }
}

const sortHighScores = highScores => {
 const sortedScores = highScores.sort((a, b) => b.score - a.score);

 return updateHighScoreList(sortedScores);
}

const addHighScore = (highScores, newScoreData) => {
 highScores.push(newScoreData);

 return sortHighScores(highScores);
}

const replaceHighScore = (highScores, newScoreData, scoreToReplace) => {
 const filteredScores = highScores.filter(({ date }) => date !== scoreToReplace.date);

 return addHighScore(filteredScores, newScoreData)
}

export const getHighScores = async (callback = null) => {
 try {
  const data = await AsyncStorage.getItem('highScores');
  const parsedData = JSON.parse(data)
  return callback ? callback(parsedData) : parsedData;
 } catch (e) {
  return callback ? callback(null) : null;
 }
}

export const updateHighScores = async (newScore) => {
 const newScoreData = { date: moment.now(), score: newScore };
 const highScores = await getHighScores();
 const lowestScore = highScores[highScores.length - 1];

 if (!highScores) return await updateHighScoreList([newScoreData]);
 if (highScores.length < 5) return addHighScore(highScores, newScoreData);
 if (newScore > lowestScore.score) return replaceHighScore(highScores, newScoreData, lowestScore);
}
