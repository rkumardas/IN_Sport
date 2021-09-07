import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

//------------------component files-----------------------------
import styles from './styles/PurchasedCard.style';
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
