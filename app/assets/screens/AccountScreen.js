import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import color from '../config/color';
import Icons from '../components/Icons';
import AccountList from '../components/AccountList';



const menuItems = [
    {
        title:'My Listing',
        icon: {
            name:'format-list-bulleted',
            backgroundColor:color.primary,
        },
        
    },
    {
        title:'My Messages',
        icon: {
            name:'email',
            backgroundColor:color.skyColor,
        },
        targetScreen:'Messages'
    }
]; 

export default function AccountScreen({navigation}) {
  return (
    <View style={styles.mainBox}>
        <View style={styles.container}>
        <ListItem
        title='Mosh'
        subTitle='programingwithmosh@gmail.com'
        image={require('../../assets/Mosh.jpg')}
        // onPress={() => console.log('pressed')}
        />
        </View>
        <View style={styles.container}>
           <FlatList
                data={menuItems}
                keyExtractor={(menuItem) => menuItem.title}
                renderItem={({ item }) => (
                    <ListItem
                    title={item.title}
                    onPress={() => { if(item.targetScreen) navigation.navigate(item.targetScreen) }}
                    ImageComponent={
                        <Icons
                        name={item.icon.name}
                        backgroundColor={item.icon.backgroundColor}
                        />
                    }
                    />
                    
                )}
            />
        </View>
        <View>
            <AccountList 
                title='LogOut'
                icon='logout'
            />

            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20,
        backgroundColor:color.secondary
    },
    mainBox:{
        backgroundColor:color.lightGrey,
        flex:1
    },
})