import { StyleSheet, View, Image } from 'react-native'
import React from 'react'


import AppText from '../components/AppText'
import color from '../config/color'
import ListItem from '../components/ListItem'


export default function ListingDetailScreen({route}) {
  
  const listing = route.params.listing;
  
  return (
    <View>
      <Image 
      style={styles.image}
      resizeMode='cover'
      source={{ uri: listing.images[0].url }}
      />
      <View style={styles.detailContainer}> 
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.listContainer}>
          <ListItem 
        image={require('../Mosh.jpg')}
        title='Mosh'
        subTitle='5 Listings'
        />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:250,
    },
    listContainer:{
      paddingVertical:30,
    },
    detailContainer: {
        padding:15,
    },
    title:{
        fontSize:18,
        fontWeight:'500',
        color:color.black,

    },
    price:{
        color:color.skyColor,
        fontSize:16,
        fontWeight:'bold',
        marginVertical:5
    }
})