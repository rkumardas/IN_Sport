import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Eventcards = () => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image
          resizeMode="stretch"
          resizeMethod="scale"
          source={require('../assets/GroupImage.jpg')}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: 20,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Eventcards;

const styles = StyleSheet.create({
  card: {
    height: 150,
    width: 300,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 20,
  },
});
