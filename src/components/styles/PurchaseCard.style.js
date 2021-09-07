import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../responsiveScrn';

export default StyleSheet.create({
  container: {
    width: wp('90%'),
    height: hp('20%'),
    marginTop: wp('2%'),
    marginBottom: hp('1%'),
  },
  rowSBContainer: {
    flexDirection: 'row',
    width: wp('90%'),
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  rowContanier: {
    flexDirection: 'row',
    width: wp('50%'),
  },
  headerTitleText: {
    fontSize: hp('3%'),
    marginHorizontal: wp('2%'),
  },
  iconCircle: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 50,
  },
  boxContainer: {
    marginVertical: hp('2%'),
    width: wp('90%'),
    height: hp('35%'),
    borderRadius: 10,
    backgroundColor: '#7555CF',
    padding: hp('2'),
  },
  privateContanier: {
    backgroundColor: 'pink',
    paddingHorizontal: wp('1%'),
    borderRadius: 5,
    height: hp('2.5%'),
    marginTop: hp('1%'),
    marginRight: 40,
  },
  buttonContanier: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },
  button: {
    bottom: 0,
    width: '100%',
    height: hp('6%'),
    borderRadius: 100,
    backgroundColor: '#11D0A2',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    shadowOffset: {
      width: 0,
      height: hp('4%'),
    },
    elevation: 5,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: hp('3%'),
  },
  TextStyle: {
    color: 'white',
    fontSize: hp('2%'),
    marginVertical: hp('1%'),
  },
  borderLine: {
    borderStyle: 'dashed',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginTop: hp('1%'),
  },
  iconback: {
    justifyContent: 'center',
    marginRight: wp('1'),
  },
});
