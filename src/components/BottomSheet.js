import React, {useRef, useState} from 'react';
import {StyleSheet, View, ScrollView, Animated} from 'react-native';

//------------------component files-----------------------------
import PurchaseCrd from '../components/PurchaseCard';
import PurchasedCrd from '../components/PurchasedCard';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from './responsiveScrn';

const BottomSheet = data => {
  const [isSell, setisSell] = useState(false);
  const {id, onClick} = data;
  const checkout = () => {
    setisSell(true);
  };

  return (
    <View style={styles.PurchaseContainer}>
      <View style={styles.headerIcon}></View>

      <View style={styles.container}>
        {isSell ? (
          <PurchasedCrd onClick={onClick} />
        ) : (
          <PurchaseCrd id={id} onClick={checkout} />
        )}
      </View>
      <View style={styles.buttonContainer}></View>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  PurchaseContainer: {
    height: hp('80%'),
    bottom: hp('-20%'),
    backgroundColor: 'white',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  headerIcon: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 3,
    marginVertical: hp('2%'),
    marginHorizontal: wp('45%'),
    borderRadius: 5,
  },

  container: {
    marginVertical: hp('1%'),
    marginHorizontal: wp('4%'),
    height: hp('70%'),
  },
});
