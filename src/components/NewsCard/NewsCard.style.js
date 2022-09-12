import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    width: Dimensions.get('window').width / 2.2,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 2.5,
    borderRadius: 10,
  },
  title: {fontWeight: 'bold', color: '#000000'},
  price: {fontWeight: 'bold'},
  stock: {color: 'red', fontWeight: 'bold'},
});
