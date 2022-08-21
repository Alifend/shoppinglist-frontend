import axios from "axios";
const API = "http://192.168.0.18:3001";
class ListServices {
  createList(list) {
    return axios.post(API + "/shopList/", item);
  }
}

export default new ListServices();
