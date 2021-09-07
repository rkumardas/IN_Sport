import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../responsiveScrn';

export default StyleSheet.create({
  PurchaseContainer: {
    height: hp('80%'),
    bottom: hp('-20%'),
    backgroundColor: 'white',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  headerIcon: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 3,
    marginVertical: hp('2%'),
    marginHorizontal: wp('45%'),
    borderRadius: 5,
  },

  container: {
    marginVertical: hp('1%'),
    marginHorizontal: wp('4%'),
    height: hp('70%'),
  },
});
