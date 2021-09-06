import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  paybox: {
    backgroundColor: 'white',
    height: hp('8%'),
    width: hp('8%'),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 5,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
});
