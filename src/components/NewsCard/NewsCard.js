import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './NewsCard.style';

const NewsCard = ({news}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: news.imgURL}} />
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.price}>{news.price}</Text>
      <Text style={styles.stock}>{news.inStock ? '' : 'Stokda yok'}</Text>
    </View>
  );
};

export default NewsCard;
