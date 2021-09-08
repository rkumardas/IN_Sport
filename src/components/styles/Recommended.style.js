import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../responsiveScrn';

export default StyleSheet.create({
  card: {
    height: 150,
    width: 300,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 30,
    // backgroundColor: 'yellow',
  },
  imageWarper: {
    width: wp('68%'),
    position: 'absolute',
    // backgroundColor: 'red',
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 15,
  },
  box: {
    backgroundColor: 'black',
    height: 25,
    paddingHorizontal: 10,
    paddingBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
  },
  textImage: {
    color: 'white',
    fontSize: hp('2%'),
    fontWeight: '600',
  },
  priceImage: {
    backgroundColor: '#00dfeb',
    height: 25,
    justifyContent: 'center',
    borderRadius: 10,
    paddingRight: wp('3%'),
    paddingLeft: wp('3%'),
    marginRight: 10,
  },
});
