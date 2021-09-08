import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../responsiveScrn';
export default StyleSheet.create({
  card: {
    width: wp('94%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('2%'),
  },
  image: {
    width: wp('94%'),
    height: hp('25%'),
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  imageWraper: {
    position: 'absolute',
    top: hp('0%'),
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: wp('3%'),
    marginLeft: wp('3%'),
  },
  imageText: {
    color: 'white',
    fontSize: hp('2%'),
  },
  partnercontainer: {
    backgroundColor: '#00dfeb',
    paddingHorizontal: wp('1%'),
    borderRadius: 10,
  },
  sportcontainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: wp('3%'),
    paddingHorizontal: wp('3%'),
    justifyContent: 'center',
  },
  priceImage: {
    backgroundColor: '#00dfeb',
    fontWeight: 'bold',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingRight: wp('3%'),
    paddingLeft: wp('3%'),
    marginRight: 10,
  },
  bottomCard: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20, //add width
    borderBottomRightRadius: 20,
  },
  inforRowSB: {
    marginVertical: hp('1%'),
    width: wp('94.1%'), //******-------------------last value------------- */
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  rightRow: {
    flex: 1,
    marginVertical: hp('1%'),
    marginHorizontal: hp('2%'),
    alignItems: 'flex-end',
  },
  prizeContainer: {
    flexDirection: 'row',
    marginHorizontal: wp('3%'),
  },
  prizeContainerText: {
    fontSize: hp('2%'),
    marginVertical: 10,
  },
  infoContainer: {
    width: hp('25%'),
    marginHorizontal: wp('3%'),
  },
  inforow: {
    flexDirection: 'row',
    marginVertical: hp('1%'),
  },
  infoText: {
    fontSize: hp('2%'),
    marginHorizontal: wp('2%'),
  },
  icon: {
    marginHorizontal: wp('3%'),
  },
  LoadingStyle: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  kmText: {
    fontSize: hp('1.5%'),
    marginHorizontal: 3,
  },
});
