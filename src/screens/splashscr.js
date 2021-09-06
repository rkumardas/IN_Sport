import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

//------------------component files-----------------------------
import {heightPercentageToDP as hp} from '../components/responsiveScrn';

const splashscr = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logo.jpg')}
        resizeMode="cover"
        style={styles.logo}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          © 2020 Are you in App. All rights reserved
        </Text>
      </View>
    </View>
  );
};

export default splashscr;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7555CF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    borderRadius: 20,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 60,
  },
  text: {
    color: 'white',
    letterSpacing: hp('0.3%'),
    fontSize: hp('1.3%'),
  },
});
