import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

//------------------component files-----------------------------
import {heightPercentageToDP as hp} from '../components/responsiveScrn';
import styles from './styles/splashscr.style';

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
