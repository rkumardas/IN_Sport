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

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
  welcome: {
    flex: 1.5,
    backgroundColor: '#7555CF',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 10,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  welcomeText: {
    margin: 20,
    color: 'white',
    fontSize: hp('4%'),
    fontWeight: 'bold',
    flex: 1,
  },
  welcomeBell: {
    alignContent: 'flex-end',
    margin: 20,
  },
  inputbox: {
    flex: 1,
    height: hp('4%'),
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingVertical: 0,
  },
  inputcontanair: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 40,
  },
  iconContainerL: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
  },
  iconContainerR: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
  },
  recommended: {
    marginTop: 10,
    flex: 2,
  },
  recommendedTextRow: {
    flexDirection: 'row',
  },
  recommendedText: {
    marginLeft: 30,
    flex: 1,
    fontWeight: 'bold',
    color: 'grey',
    fontSize: hp('2%'),
  },
  recommendedViewText: {
    alignContent: 'space-between',
    marginRight: 40,
    color: 'grey',
  },
  recommendedBox: {
    backgroundColor: 'yellow',
    margin: 40,
    borderRadius: 30,
    flex: 1,
    paddingVertical: 90,
    paddingHorizontal: 140,
  },
  eventLists: {
    flex: 4,
    alignContent: 'flex-start',
  },
});
