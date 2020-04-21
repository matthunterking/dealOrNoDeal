import { Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;

export const isLargeDevice = Dimensions.get('window').height > 800;
