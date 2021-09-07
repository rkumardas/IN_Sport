import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../responsiveScrn';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  paybox: {
    backgroundColor: 'white',
    height: hp('8%'),
    width: hp('8%'),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 5,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
});
