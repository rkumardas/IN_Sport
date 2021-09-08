import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {heightPercentageToDP as hp} from './responsiveScrn';

import styles from './styles/Recommended.style';

const Eventcards = () => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image
          resizeMode="stretch"
          resizeMethod="scale"
          source={require('../assets/Group472.jpg')}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: 20,
          }}
        />
        <View style={styles.imageWarper}>
          <View style={styles.row}>
            <Image
              source={require('../assets/schedule.png')}
              resizeMode="cover"
              style={{height: 15, width: 15, margin: 4}}
            />
            <Text style={styles.textImage}>date</Text>
          </View>
          <Text style={{...styles.textImage, fontSize: hp('3%')}}>
            Camden Town Football Event
          </Text>
          <View
            style={{
              ...styles.row,
              alignContent: 'space-between',
              justifyContent: 'space-between',
            }}>
            <View style={styles.box}>
              <Text style={styles.textImage}>2/99</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.textImage}>+5 friends</Text>
            </View>
            <View style={styles.priceImage}>
              <Text style={styles.textImage}>£ 11.98</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Eventcards;
