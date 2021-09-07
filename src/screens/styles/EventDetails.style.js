import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../components/responsiveScrn';

export default StyleSheet.create({
  imagecontainer: {
    height: hp('40%'),
    flex: 1,
  },
  imageHeader: {
    height: hp('8%'),
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  headerIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  inforRowSB: {
    marginVertical: 20,
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  imageWraper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 15,
    marginLeft: 15,
    height: hp('20%'),
  },
  imageText: {
    color: 'white',
    fontSize: hp('2%'),
  },
  partnercontainer: {
    backgroundColor: '#00dfeb',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  sportcontainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  priceImage: {
    backgroundColor: '#00dfeb',
    fontWeight: 'bold',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingRight: 5,
    paddingLeft: 10,
  },
  rightRow: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 15,
    alignItems: 'flex-end',
  },
  detailcontainer: {
    flex: 1,
    width: wp('90%'),
    marginHorizontal: 20,
  },
  button: {
    width: wp('90%'),
    height: hp('6%'),
    borderRadius: 100,
    backgroundColor: '#11D0A2',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    shadowOffset: {
      width: 0,
      height: 8,
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
  containerText: {
    alignContent: 'stretch',
    fontSize: hp('2.5%'),
    color: 'grey',
    fontWeight: '300',
    textAlign: 'justify',
  },
  headerText: {
    fontSize: hp('2.5%'),
    color: 'grey',
    fontWeight: '400',
    marginVertical: hp(3),
  },
  similarContainer: {
    marginVertical: 60,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  borderLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 30,
  },
  shareEventBox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 15,
    paddingVertical: 2,
    marginHorizontal: 5,
    borderRadius: 50,
  },
  locationBtn: {
    width: wp('25%'),
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'blue',
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadding: {
    flex: 1,
    alignContent: 'center',
  },
  spText: {
    fontSize: hp('1.5%'),
  },
});
