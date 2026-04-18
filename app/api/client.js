import { create } from "apisauce";
import { Platform } from "react-native";
import Constants from "expo-constants";
// import cashe from '../utility/cashe'

const getApiBaseUrl = () => {
  if (process.env.EXPO_PUBLIC_API_URL) {
    return process.env.EXPO_PUBLIC_API_URL;
  }

  const hostUri =
    Constants.expoConfig?.hostUri ||
    Constants.manifest2?.extra?.expoClient?.hostUri ||
    Constants.manifest?.debuggerHost;

  const devHost = hostUri?.split(":")?.[0];
  if (devHost) {
    return `http://${devHost}:9000/api`;
  }

  const fallbackHost = Platform.OS === "android" ? "10.0.2.2" : "localhost";
  return `http://${fallbackHost}:9000/api`;
};

const baseURL = getApiBaseUrl();

const apiClient = create({
  baseURL,
});

console.log("API baseURL:", baseURL);

// const get = apiClient.get;
// apiClient.get = async(url, params, axiosConfig) => {
//  const respone = await get(url, params, axiosConfig);

//  if(respone) {
//   cashe.store(url, respone.data);
//   return respone;
//  }

// const data = await cashe.get(url);

// return data ? {ok : true, data} : respone;
// }

export default apiClient;
