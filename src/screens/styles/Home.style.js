import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../components/responsiveScrn';

export default StyleSheet.create({
  contanier: {
    flex: 1,
  },
  welcome: {
    flex: 1.5,
    backgroundColor: '#7555CF',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 10,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  welcomeText: {
    margin: 20,
    color: 'white',
    fontSize: hp('4%'),
    fontWeight: 'bold',
    flex: 1,
  },
  welcomeBell: {
    alignContent: 'flex-end',
    margin: 20,
  },
  inputbox: {
    flex: 1,
    height: hp('4%'),
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingVertical: 0,
  },
  inputcontanair: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 40,
  },
  iconContainerL: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
  },
  iconContainerR: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
  },
  recommended: {
    marginTop: 10,
    flex: 2,
  },
  recommendedTextRow: {
    flexDirection: 'row',
  },
  recommendedText: {
    marginLeft: 30,
    flex: 1,
    fontWeight: 'bold',
    color: 'grey',
    fontSize: hp('2%'),
  },
  recommendedViewText: {
    alignContent: 'space-between',
    marginRight: 40,
    color: 'grey',
  },
  recommendedBox: {
    backgroundColor: 'yellow',
    margin: 40,
    borderRadius: 30,
    flex: 1,
    paddingVertical: 90,
    paddingHorizontal: 140,
  },
  eventLists: {
    flex: 4,
    alignContent: 'flex-start',
  },
});
