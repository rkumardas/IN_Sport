import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import axios from 'react-native-axios';

//------------------component files-----------------------------
import styles from './styles/EventCard.style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from './responsiveScrn';

const Eventcards = ({onCardClick, direction}) => {
  //data handlers
  const [Data, setstate] = useState();
  const [isLoad, setisLoad] = useState(false);

  const headers = {
    Authorization: 'Bearer 786785e9-1b74-430a-80d9-aae49678954f',
  };
  const uri =
    'https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyDeveloperTest1/allEvents';

  //hooks for data fetching
  useEffect(() => {
    axios
      .get(uri, {headers})
      .then(res => {
        setstate(res.data.allEvents);
        setisLoad(true);
      })
      .catch(err => console.log(err));

    return;
  }, []);

  const card = items => {
    return (
      <TouchableOpacity
        onPress={() => {
          onCardClick(items.id);
        }}>
        <View key={items.id} style={styles.card}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{uri: items.mainImage}}
          />

          {/* ----------------------------------Text on image------------------------------------*/}
          <View style={styles.imageWraper}>
            <View style={styles.inforow}>
              {items.isPartnered ? (
                <View style={styles.partnercontainer}>
                  <Text style={styles.imageText}>Patner</Text>
                </View>
              ) : (
                <Text></Text>
              )}
              <View style={styles.sportcontainer}>
                <Text
                  style={{
                    ...styles.imageText,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  {items.sport}
                </Text>
              </View>
            </View>
            <Text
              style={{
                ...styles.imageText,
                fontWeight: 'bold',
                fontSize: hp('3%'),
                width: wp('65%'),
              }}>
              {items.name}
            </Text>
            <View
              style={{
                ...styles.inforRowSB,
                position: 'absolute',
                top: hp('13%'),
                marginTop: 10,
              }}>
              <View style={styles.inforow}>
                <Image
                  source={require('../assets/schedule.png')}
                  resizeMode="cover"
                  style={{
                    height: hp('3%'),
                    width: wp('5%'),
                    marginHorizontal: wp('2%'),
                    marginTop: 3.5,
                  }}
                />
                <Text style={styles.imageText}>{items.dateTime} </Text>
              </View>
              <View style={{...styles.rightRow, marginHorizontal: 0}}>
                <Text
                  style={{
                    ...styles.imageText,
                    ...styles.priceImage,
                  }}>
                  £{items.price}
                </Text>
              </View>
            </View>
          </View>

          {/*------------------------ bottom Info In card ----------------------------------*/}
          <View style={styles.bottomCard}>
            <View style={styles.inforRowSB}>
              <View style={styles.prizeContainer}>
                <Text style={styles.prizeContainerText}>Total Prize : </Text>
                <Text
                  style={{...styles.prizeContainerText, fontWeight: 'bold'}}>
                  £{items.totalPrize}
                </Text>
              </View>
              <View style={styles.rightRow}>
                <View style={{...styles.inforow, marginVertical: 0}}>
                  <Image
                    source={require('../assets/file_uploadb.png')}
                    style={{
                      height: hp('2.5%'),
                      width: wp('4%'),
                      marginHorizontal: wp('2%'),
                    }}
                  />
                  <Image
                    source={require('../assets/favorite.png')}
                    resizeMode="cover"
                    style={{height: hp('3%'), width: wp('5%')}}
                  />
                </View>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.inforow}>
                <Image
                  source={require('../assets/av_timer.png')}
                  resizeMode="cover"
                  style={{height: hp('3%'), width: wp('5%')}}
                />
                <Text style={styles.infoText}>Time left to Book : 3 hours</Text>
              </View>
              <View style={styles.inforow}>
                <Image source={require('../assets/theater.png')} />
                <Text style={styles.infoText}>
                  {items.ticketsSold}/{items.maxTickets} attending total
                </Text>
              </View>
              <View style={styles.inforRowSB}>
                <View style={{...styles.inforow, width: 250}}>
                  <Image
                    source={require('../assets/location.png')}
                    resizeMode="cover"
                    style={{height: hp('3%'), width: wp('5%')}}
                  />
                  <Text style={styles.infoText}>{items.location}</Text>
                </View>
                <View style={styles.rightRow}>
                  <Text style={styles.kmText}>1km</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // ============================Main box======================================
  if (isLoad)
    return <View style={{flexDirection: direction}}>{Data.map(card)}</View>;
  else
    return (
      <ActivityIndicator
        size="large"
        color="#00ff00"
        style={styles.LoadingStyle}
      />
    );
};

export default Eventcards;
