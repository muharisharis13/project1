
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async ({ value, key }) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    // saving error
  }
}


export const getDataStore = async (key) => {
  try {
    return JSON.parse(await AsyncStorage.getItem(key))
  } catch (e) {
    // error reading value
    alert("error", e)
  }
}