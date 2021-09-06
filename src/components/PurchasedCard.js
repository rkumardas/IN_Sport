import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

//------------------component files-----------------------------
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from './responsiveScrn';

const PurchasedCard = data => {
  const {onClick} = data;
  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>Purchase</Text>
      </View>

      <View style={styles.circleicon}>
        <Image
          source={require('../assets/done.png')}
          resizeMode="cover"
          style={{height: hp('8.5%'), width: wp('19%')}}
        />
      </View>

      <Text style={styles.thankContainer}>Thank you</Text>

      <Text style={styles.conTextContainer}>Your payment was succsesfull!</Text>

      <View style={styles.borderLine} />

      <Text style={styles.conTextContainer}>Your booking ID</Text>

      <Text style={styles.idContainer}>#337451</Text>

      <View style={styles.borderLine} />

      <Text style={styles.conTextContainer}>
        You will need this ID to enter inside the event. You can view this code
        inside your profile / booked event
      </Text>

      <TouchableOpacity onPress={onClick}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>CLOSE</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PurchasedCard;

const styles = StyleSheet.create({
  container: {
    margin: hp('1%'),
    alignItems: 'center',
    height: 1000,
  },
  headerTitle: {
    marginHorizontal: wp('3%'),
    width: wp('90%'),
  },
  headerTitleText: {
    fontSize: hp('3%'),
  },
  circleicon: {
    marginTop: 40,
    backgroundColor: '#11D0A2',
    height: hp('9%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  thankContainer: {
    fontSize: hp('5%'),
    fontWeight: 'bold',
  },
  idContainer: {
    fontSize: hp('5%'),
    fontWeight: 'bold',
    color: '#02D9E7',
  },
  conTextContainer: {
    fontSize: hp('2%'),
    color: '#475464',
  },
  button: {
    bottom: 0,
    width: wp('86%'),
    height: hp('5%'),
    borderRadius: 100,
    backgroundColor: '#936EFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('1.5%'),
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 5,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: hp('3%'),
  },
  borderLine: {
    borderBottomColor: 'black',
    borderBottomWidth: hp('0.2%'),
    marginVertical: 20,
    width: wp('95%'),
  },
});
