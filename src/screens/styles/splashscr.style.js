import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from '../../components/responsiveScrn';

export default StyleSheet.create({
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
