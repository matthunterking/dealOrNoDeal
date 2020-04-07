import React, { useRef } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { deviceWidth } from '../constants/device'
import Box from './Box';

const Player = ({ number }) => (
 <View style={styles.playerContainer}>
  <Box number={number} />
 </View>
)

const BoxSelectionCarousel = ({ activeBoxes, pickBox }) => {
 const carouselRef = useRef(null);

 return (
  <View style={styles.container}>
   <Carousel
    ref={carouselRef}
    data={activeBoxes}
    renderItem={({ item }) => <Player number={item} />}
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
