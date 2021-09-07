import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

//------------------component files-----------------------------
import Card from '../components/Eventcards';
import ReCard from '../components/RecommendedCard';
import styles from './styles/Home.style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../components/responsiveScrn';

const Home = ({navigation}) => {
  // -----------------Handling card click event-----------------
  const Eventhnd = id => {
    navigation.navigate('EventDetails', {id});
  };

  // ---------------------------main box-------------------------
  return (
    <KeyboardAvoidingView
      behavior={'height'}
      enabled={false}
      style={styles.contanier}>
      <ScrollView>
        {/* --------------------------------------wlcome container----------------------------- */}
        <View style={styles.welcome}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <View style={styles.welcomeBell}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/notifications.png')}
                  resizeMode="cover"
                  style={{height: hp('2%'), width: wp('4%')}}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* -------------------Input icon---------- */}
          <View style={styles.inputcontanair}>
            <View style={{...styles.iconContainerL, paddingStart: 10}}>
              <Image
                source={require('../assets/search.png')}
                resizeMode="cover"
                style={{
                  height: hp('4%'),
                  width: wp('8%'),
                }}
              />
            </View>
            <TextInput
              style={styles.inputbox}
              placeholder="Search by Event, code, location"
            />
            <View style={{...styles.iconContainerR, paddingEnd: 11}}>
              <Image
                resizeMode="cover"
                source={require('../assets/tune.png')}
                style={{height: hp('4%'), width: wp('9%')}}
              />
            </View>
          </View>
        </View>

        {/* ----------------------------------recommended container----------------------------- */}
        <View style={styles.recommended}>
          <View style={styles.recommendedTextRow}>
            <Text style={styles.recommendedText}>Recommended Events</Text>
            <TouchableOpacity>
              <Text style={styles.recommendedViewText}>View all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true}>
            {Array(4)
              .fill()
              .map(_ => (
                <ReCard />
              ))}
          </ScrollView>
        </View>

        {/* --------------------------------------Event List------------------------------- */}
        <View style={styles.eventLists}>
          <Card onCardClick={Eventhnd} direction={'column'} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Home;
