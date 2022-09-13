import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    width: Dimensions.get('window').width / 2.2,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width,
    borderRadius: 10,
    maxWidth: '100%',
    maxHeight: '100%',
  },
  title: {fontWeight: 'bold', color: '#000000'},
  price: {fontWeight: 'bold'},
  stock: {color: 'red', fontWeight: 'bold'},
});
