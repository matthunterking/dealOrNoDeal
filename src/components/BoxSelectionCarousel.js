import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { deviceWidth } from '../constants/device'
import Box from './Box';

const Player = ({ boxNumber, isOpened, value, openBox }) => (
 <TouchableOpacity style={styles.playerContainer} onPress={() => openBox(boxNumber)}>
  <Box number={boxNumber} isOpened={isOpened} value={value} />
 </TouchableOpacity>
)

const BoxSelectionCarousel = ({ openBox, boxValues, chosenBoxNumber }) => {
 const carouselRef = useRef(null);

 const carouselData = boxValues.filter(({ boxNumber }) => boxNumber !== chosenBoxNumber)


 return (
  <View style={styles.container}>
   <Carousel
    ref={carouselRef}
    data={carouselData}
    renderItem={({ item }) => <Player {...item} openBox={openBox} />}
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
  height: 200,
  backgroundColor: 'green'
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
  justifyContent: 'center',
  alignItems: 'center'
 }
})

export default BoxSelectionCarousel;
