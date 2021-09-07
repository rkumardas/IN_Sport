import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  ImageBackground,
  ActivityIndicator,
  Image,
} from 'react-native';
import axios from 'react-native-axios';

//----------------------------component files-----------------------
import Card from '../components/Eventcards';
import styles from './styles/EventDetails.style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../components/responsiveScrn';

const EventDetails = ({route, navigation}) => {
  const [Data, setData] = useState(null);
  const [isLoad, setisLoad] = useState(false);
  const {id} = route.params;
  const email = ' contact@techalchemy.co ';

  const Eventhnd = id => {
    navigation.navigate('EventDetails', {id});
  };

  const headers = {
    Authorization: 'Bearer 786785e9-1b74-430a-80d9-aae49678954f',
  };

  const uri =
    'https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyDeveloperTest1/eventDetails/';

  useEffect(() => {
    axios
      .get(uri + id, {headers})
      .then(res => {
        setData(res.data.eventDetail);
        setisLoad(true);
      })
      .catch(err => console.log(err));

    return;
  }, []);

  if (!isLoad)
    return (
      <ActivityIndicator size="large" color="#00ff00" style={styles.loadding} />
    );
  else {
    return (
      <ScrollView>
        <StatusBar backgroundColor="rgba(255,255,255,0.5)" />

        {/*-------------------------------------- Image ------------------------------- */}
        <ImageBackground
          resizeMode="cover"
          source={{uri: Data.mainImage}}
          style={styles.imagecontainer}>
          <View style={styles.imageHeader}>
            <View style={styles.headerIcon}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Image
                  source={require('../assets/west.png')}
                  resizeMode="cover"
                  style={{
                    height: hp('3%'),
                    width: wp('5%'),
                    marginHorizontal: 20,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/file_upload.png')}
                  resizeMode="cover"
                  style={{
                    height: hp('3%'),
                    width: wp('5%'),
                    marginHorizontal: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.imageWraper}>
            <View style={styles.rowContainer}>
              {Data.isPartnered ? (
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
                  {Data.sport}
                </Text>
              </View>
            </View>
            <View style={{width: wp('60%')}}>
              <Text
                style={{
                  ...styles.imageText,
                  fontWeight: 'bold',
                  fontSize: hp('3%'),
                }}>
                {Data.name}
              </Text>
            </View>
            <View style={styles.inforRowSB}>
              <View style={styles.rowContainer}>
                <Image
                  source={require('../assets/schedule.png')}
                  resizeMode="cover"
                  style={{
                    height: hp('3%'),
                    width: wp('6%'),
                    marginHorizontal: 10,
                  }}
                />
                <Text style={styles.imageText}>{Data.dateTime} </Text>
              </View>
              <View style={{...styles.rightRow, marginHorizontal: 0}}>
                <Text
                  style={{
                    ...styles.imageText,
                    ...styles.priceImage,
                  }}>
                  £{Data.price}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        {/*---------------------------- details container---------------------------- */}
        <View style={styles.detailcontainer}>
          <View style={{...styles.headerIcon, marginVertical: hp('1.5%')}}>
            <Text style={styles.spText}>Total price: £{Data.totalPrize}</Text>
            <View style={{...styles.rowContainer, width: wp('40%')}}>
              <TouchableOpacity>
                <View style={styles.shareEventBox}>
                  <Image
                    source={require('../assets/person_add.png')}
                    resizeMode="cover"
                    style={{
                      height: hp('2%'),
                      width: wp('5%'),
                      marginHorizonta: 10,
                    }}
                  />
                  <Text style={styles.spText}>Share Event</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/favorite.png')}
                  resizeMode="cover"
                  style={{
                    height: hp('2%'),
                    width: wp('5%'),
                    marginHorizonta: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <Image
              source={require('../assets/theater.png')}
              resizeMode="cover"
              style={{height: hp('2%'), width: wp('4%')}}
            />
            <Text style={styles.spText}>
              {Data.ticketsSold}/{Data.maxTickets} attending total
            </Text>
          </View>

          {/* ============================About================================== */}
          <Text style={styles.headerText}>ABOUT:</Text>
          <Text style={styles.containerText}>{Data.description}</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Purchase', {id});
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Price</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.borderLine} />

          {/* ============================Venue========================================== */}
          <Text style={styles.headerText}>VENUE INFORMATION:</Text>
          <Text style={styles.containerText}>{Data.venueInformation}</Text>
          <View style={styles.borderLine} />

          {/* ============================Event creator================================== */}
          <Text style={styles.headerText}>EVENT CREATED BY:</Text>
          <View style={styles.rowContainer}>
            <Image
              source={require('../assets/account_circle.png')}
              resizeMode="cover"
              style={{
                height: hp('2%'),
                width: wp('4%'),
                justifyContent: 'center',
                margin: 5,
              }}
            />
            <Text style={styles.containerText}>{Data.eventCreator}</Text>
          </View>
          <View style={styles.borderLine} />

          {/* ============================Location======================================= */}
          <Text style={styles.headerText}>LOCATION:</Text>

          <View style={styles.rowContainer}>
            <Image
              source={require('../assets/location.png')}
              resizeMode="cover"
              style={{
                height: hp('2%'),
                width: wp('4%'),
                justifyContent: 'center',
                margin: 5,
              }}
            />
            <View style={{width: wp('40%'), marginRight: wp('15%')}}>
              <Text style={styles.containerText}>{Data.location}</Text>
            </View>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://www.google.de/maps')}>
              <View style={styles.locationBtn}>
                <Text>Take me there</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.borderLine} />

          {/* ============================contact========================================*/}
          <Text style={styles.headerText}>CONTACT:</Text>

          <View style={styles.rowContainer}>
            <Text style={{...styles.containerText}}>
              send us email at
              <Text
                onPress={() =>
                  Linking.openURL(
                    'mailto:contact@techalcmy.co?subject=Emaling_u&body=Description',
                  )
                }
                style={{color: 'blue'}}>
                {email}
              </Text>
              or call us at +1991-681-0200
            </Text>
          </View>
          <View style={styles.borderLine} />

          {/* ============================Team Info=====================================*/}
          <Text style={styles.headerText}>TEAM INFORMATION:</Text>
          <Text style={styles.containerText}>{Data.teamInformation}</Text>

          <View style={styles.borderLine} />
          {/* ============================Similar=======================================*/}
          <View style={styles.similarContainer}>
            <Text style={styles.headerText}>SIMILAR:</Text>
            <ScrollView horizontal={true}>
              <Card onCardClick={Eventhnd} direction={'row'} />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default EventDetails;
