import { create } from "apisauce";
import cashe from '../utility/cashe'

const apiClient = create({
  // baseURL: "http://localhost:9000/api",
  baseURL: "http://192.168.1.4:9000/api",
});

const get = apiClient.get;
apiClient.get = async(url, params, axiosConfig) => {
 const respone = await get(url, params, axiosConfig);

 if(respone) {
  cashe.store(url, respone.data);
  return respone;
 }

const data = await cashe.get(url);

return data ? {ok : true, data} : respone;
}

export default apiClient;