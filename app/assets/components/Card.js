import { View, StyleSheet, Pressable, Image } from 'react-native';
// import { Image } from 'expo-image';

import color from '../config/color';  
import AppText from './AppText';

function Card({ title, subTitle, imageUrl, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: imageUrl }}           // remote image (http/https)
          style={styles.productImage}
          // contentFit="cover"
          // cachePolicy="disk"                   // caching achhi hai
          // // placeholder ko temporarily hatao ya neeche wala tarika use karo
          // // placeholder={require('../assets/placeholder.png')}  
          // transition={300}
          // onError={(e) => console.log('Image Error:', e)}
        />
        
        <View style={styles.detailContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    backgroundColor: color.secondary,
    overflow: "hidden",
    marginBottom: 20,
  },
  detailContainer: {
    padding: 15,
  },
  productImage: {
    width: "100%",
    height: 200,
  },
  title: {
    color: color.black,
    fontSize: 14,
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 14,
    color: color.skyColor,
  }
});

export default Card;