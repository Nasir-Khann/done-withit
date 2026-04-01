import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const prefix = 'cashe';
const expiryTime = 5 ;

const store = async (key, value) => { // key = listing , value = respone.data
    try {
        const item = {
            value,
            timeStamp: Date.now(),
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
    } catch (error) {
        console.log(error)
    }   
}
const isExpired = (item) => {
    const now = moment(Date.now());
    const storedTime = moment(item.timeStamp);
    return now.diff(storedTime, 'minute') > expiryTime ;
}
const get = async (key) => {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if(!item) return null;
    if(isExpired(item)) {
        await AsyncStorage.removeItem(prefix + key);
        return null;
    }

    return item.value
}

export default {
  store,
  get,
};