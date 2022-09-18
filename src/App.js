import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Todo from './components/todoList/todo';
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Todo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#142423',
    flex: 1,
  },
});
export default App;
