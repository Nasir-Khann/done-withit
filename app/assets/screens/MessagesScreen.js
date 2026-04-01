import { StyleSheet,  FlatList, View } from 'react-native';
import React, { useState } from 'react';



import ListItem from '../components/ListItem';
// import Constants from 'expo-constants';
import Screen from '../components/Screen';
import itemSeparator from '../components/itemSeparator';
import ListItemDeleteActions from '../components/ListItemDeleteActions';   // path sahi adjust kar lo


// console.log(Constants.statusBarHeight);


const initialMessages =[
  {
    id:1,
    title:'Mosh',
    description:'Hi! is it still available? I need it',
    image:require('../Mosh.jpg')
  },
  {
    id:2,
    title:'Mosh',
    description:'Hi! is it still available? i wanna buy this',
    image:require('../Mosh.jpg')
  },
  {
    id:3,
    title:'Mosh',
    description:'Hi! is it still available? is there any offer?',
    image:require('../Mosh.jpg')
  }
];

export default function MessagesScreen({navigation}) {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter(m => m.id !== message.id));
  };

 const handleRefresh = () => {
  

  setTimeout(() => {
    setMessages([{ id: 1, title: "Mosh", description: "Hi! is it still available? i wanna buy this", image: require("../Mosh.jpg") }]);
    
  }, 1000);
};


  return (
    <View style={styles.sreen}>




      
      <FlatList
      data={messages}
      keyExtractor={message => message.id.toString()}
      refreshing={refreshing} 
      onRefresh={() => {
        setRefreshing(true);
  setMessages([
    { id: 2, title: "T2", description: "D2", image:require('../Mosh.jpg') }
  ]);
  setRefreshing(false);
}}
      renderItem={({item}) => <ListItem
      title= {item.title}
      subTitle={item.description}
      image={item.image}
      onPress={() => console.log('Message Selceted' )}
      renderRightActions={() => <ListItemDeleteActions 
      onPress={() => handleDelete(item)}
      />}

    />
  }
      ItemSeparatorComponent={itemSeparator}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  sreen:{
    paddingHorizontal:0,
  }
})

