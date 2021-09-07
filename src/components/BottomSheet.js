import React, {useRef, useState} from 'react';
import {StyleSheet, View, ScrollView, Animated} from 'react-native';

//------------------component files-----------------------------
import PurchaseCrd from '../components/PurchaseCard';
import PurchasedCrd from '../components/PurchasedCard';
import styles from './styles/BottomSheet.style';
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
