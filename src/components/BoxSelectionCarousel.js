import React, { useRef, useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { deviceWidth } from '../constants/device'
import Box from './Box';
import { isLargeDevice } from '../constants/device';
import { CAROUSEL_BACKGROUND } from '../constants/theme';
import SpeechBubble from './SpeechBubble';

const Player = ({ boxNumber, isOpened, value, openBox, player, isActive }) => (
 <TouchableOpacity
  style={styles.playerContainer}
  onPress={() => openBox(boxNumber)}
  activeOpacity={1}
 >
  <Image source={player.image} style={styles.playerImage} />
  {isActive && !isOpened && player.phrase &&
   <SpeechBubble>{player.phrase}</SpeechBubble>}
  <Box number={boxNumber} isOpened={isOpened} value={value} />
 </TouchableOpacity>
)

const BoxSelectionCarousel = ({ openBox, boxValues, chosenBoxNumber }) => {
 const carouselRef = useRef(null);
 const [currentIndex, setCurrentIndex] = useState(null)
 const carouselData = boxValues.filter(({ boxNumber }) => boxNumber !== chosenBoxNumber)

 return (
  <View style={styles.container}>
   <Carousel
    ref={carouselRef}
    data={carouselData}
    onSnapToItem={(index) => setCurrentIndex(index)}
    renderItem={({ item }) => {
     const itemIndex = carouselData.map(({ boxNumber }) => boxNumber).indexOf(item.boxNumber);
     const isActive = currentIndex === itemIndex;

     return <Player {...item} openBox={openBox} isActive={isActive} />
    }}
    sliderWidth={deviceWidth}
    itemWidth={200}
    loop
   />
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flexDirection: 'row',
  height: isLargeDevice ? 205 : 200,
  paddingBottom: isLargeDevice ? 5 : 0,
  backgroundColor: CAROUSEL_BACKGROUND
 },
 yourBoxContainer: {
  flex: 1,
  justifyContent: 'center',
  padding: 15
 },
 gameStatusContainer: {
  flex: 2,
  justifyContent: 'space-around'
 },
 playerContainer: {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center'
 },
 playerImage: {
  position: 'absolute',
  bottom: 75
 }
})

export default BoxSelectionCarousel;
