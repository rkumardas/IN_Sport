import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import axios from 'react-native-axios';

//------------------component files-----------------------------
import PaymentOption from './paymentOption';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from './responsiveScrn';

const Purchasecard = data => {
  const [Data, setData] = useState();
  const [isLoad, setisLoad] = useState(false);
  const {id, onClick} = data;
  const headers = {
    Authorization: 'Bearer 786785e9-1b74-430a-80d9-aae49678954f',
  };

  const uri =
    'https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyDeveloperTest1/checkout/';

  useEffect(() => {
    axios
      .get(uri + id, {headers})
      .then(res => {
        setData(res.data.checkout);
        setisLoad(true);
      })
      .catch(err => console.log(err));
    return;
  }, []);

  if (!isLoad) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  } else
    return (
      <View style={styles.container}>
        <View style={styles.rowSBContainer}>
          <View style={styles.rowContanier}>
            <View style={styles.iconback}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/west_black.png')}
                  resizeMode="cover"
                  style={{height: hp('2%'), width: wp('4%')}}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.headerTitleText}>Purchase</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.iconCircle}>
              <Image
                source={require('../assets/close.png')}
                resizeMode="cover"
                style={{height: hp('2%'), width: wp('5%')}}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.boxContainer}>
          {/* ---------------------------box container-------------------------------------- */}
          <View style={styles.rowSBContainer}>
            <Text
              style={{
                ...styles.TextStyle,
                fontSize: hp('3%'),
                width: wp('60%'),
                // height: hp('6%'),
              }}>
              {Data.name}
            </Text>

            {Data.isPrivate ? (
              <View style={styles.privateContanier}>
                <Text style={{...styles.TextStyle, marginVertical: 0}}>
                  Private
                </Text>
              </View>
            ) : (
              <Text></Text>
            )}
          </View>
          <View style={styles.rowContanier}>
            <Image
              source={require('../assets/schedule.png')}
              resizeMode="cover"
              style={{
                height: hp('2%'),
                width: wp('5%'),
                marginTop: hp('1.5%'),
              }}
            />
            <Text style={styles.TextStyle}>{Data.dateTime}</Text>
          </View>
          <View style={styles.rowContanier}>
            <Image
              source={require('../assets/location_white.png')}
              resizeMode="cover"
              style={{
                height: hp('2%'),
                width: wp('5%'),
                marginTop: hp('1.5%'),
              }}
            />
            <Text style={styles.TextStyle}>{Data.location}</Text>
          </View>
          <View style={styles.borderLine} />
          <View style={styles.rowSBContainer}>
            <Text style={styles.TextStyle}>total prize</Text>
            <Text
              style={{
                ...styles.TextStyle,
                fontWeight: '900',
                marginRight: 40,
                fontSize: hp('3%'),
              }}>
              £ {Data.price}
            </Text>
          </View>
          <Text
            style={{
              ...styles.TextStyle,
              fontSize: hp('1.5%'),
              marginLeft: '50%',
              alignItems: 'flex-end',
            }}>
            (including 10% booking fee)
          </Text>
        </View>

        <Text>choose your payment method</Text>
        <View style={styles.rowContanier}>
          <PaymentOption />
        </View>

        <View style={styles.buttonContanier}>
          <TouchableOpacity
            onPress={() => {
              onClick();
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>PAY NOW</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
};

export default Purchasecard;

import styles from './styles/PurchaseCard.style';
