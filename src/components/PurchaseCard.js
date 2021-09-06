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

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    height: hp('20%'),
    marginTop: wp('2%'),
    marginBottom: hp('1%'),
  },
  rowSBContainer: {
    flexDirection: 'row',
    width: wp('90%'),
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  rowContanier: {
    flexDirection: 'row',
    width: wp('50%'),
  },
  headerTitleText: {
    fontSize: hp('3%'),
    marginHorizontal: wp('2%'),
  },
  iconCircle: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 50,
  },
  boxContainer: {
    marginVertical: hp('2%'),
    width: wp('90%'),
    height: hp('35%'),
    borderRadius: 10,
    backgroundColor: '#7555CF',
    padding: hp('2'),
  },
  privateContanier: {
    backgroundColor: 'pink',
    paddingHorizontal: wp('1%'),
    borderRadius: 5,
    height: hp('2.5%'),
    marginTop: hp('1%'),
    marginRight: 40,
  },
  buttonContanier: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },
  button: {
    bottom: 0,
    width: '100%',
    height: hp('6%'),
    borderRadius: 100,
    backgroundColor: '#11D0A2',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    shadowOffset: {
      width: 0,
      height: hp('4%'),
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
  TextStyle: {
    color: 'white',
    fontSize: hp('2%'),
    marginVertical: hp('1%'),
  },
  borderLine: {
    borderStyle: 'dashed',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginTop: hp('1%'),
  },
  iconback: {
    justifyContent: 'center',
    marginRight: wp('1'),
  },
});
