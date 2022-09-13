import React from 'react';
import {Dimensions} from 'react-native';

import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import product_data from './components/NewsCard/product-data.json';
import NewsCard from './components/NewsCard/NewsCard';

function App() {
  const [text, onChangeText] = React.useState('Ara...');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          ListHeaderComponent={() => (
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
          )}
          data={product_data}
          renderItem={({item}) => <NewsCard news={item} />}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: '#eceff1',
    borderRadius: 10,
    margin: 10,
    width: Dimensions.get('window').width,
  },
});

export default App;
