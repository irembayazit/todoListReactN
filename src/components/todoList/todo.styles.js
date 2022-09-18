import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
  },
  text: {
    color: '#f9a204',
    fontWeight: 'bold',
    fontSize: 35,
  },
  count: {
    color: '#f9a204',
    fontSize: 35,
  },
  box: {
    backgroundColor: '#37474f',
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  input: {
    color: 'white',
  },
  button: {
    backgroundColor: '#808080',
    padding: 10,
    width: '75%',
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  listEnable: {
    backgroundColor: '#7da453',
    borderRadius: 5,
    margin: 5,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  listDisable: {
    borderRadius: 5,
    margin: 5,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#37474f',
  },
  textInput: {
    color: 'white',
  },
  textInputCross: {
    textDecorationLine: 'line-through',
  },
});
