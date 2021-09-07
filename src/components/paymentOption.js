import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import styles from './styles/pymentOption.style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from './responsiveScrn';

const paymentOption = () => {
  const touch = () => {};

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.paybox}>
          <Image
            source={require('../assets/img_visa.png')}
            resizeMode="cover"
            style={{height: hp('1.5%'), width: wp('10%')}}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.paybox}>
          <Image
            source={require('../assets/img_master.png')}
            resizeMode="cover"
            style={{height: hp('3%'), width: wp('10.5%')}}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.paybox}>
          <Image
            source={require('../assets/img_paypal.png')}
            resizeMode="cover"
            style={{height: hp('1.5%'), width: wp('13.5%')}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default paymentOption;
