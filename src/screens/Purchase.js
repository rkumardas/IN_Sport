import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import BottomSheet from '../components/BottomSheet';
import {StackActions} from '@react-navigation/native';

import styles from './styles/Parchase.style';

const Purchase = ({route, navigation}) => {
  const {id} = route.params;

  const checkoutClose = () => {
    navigation.dispatch(StackActions.popToTop());
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../assets/image.jpg')}
        resizeMode="cover"
        style={{
          position: 'absolute',
          width: '100%',
          height: '65%',
        }}>
        <BottomSheet id={id} onClick={checkoutClose} />
      </ImageBackground>
    </View>
  );
};

export default Purchase;
