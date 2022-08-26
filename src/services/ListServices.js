import axios from "axios";
const API = "http://192.168.0.18:3001";
class ListServices {
  createList(list) {
    return axios.post(API + "/shopList/", list);
  }
  getLists() {
    return axios.get(API + "/shopList/");
  }
  getTopSaleByField(field) {
    return axios.get(API + "/shopList/topItemsByField/" + field);
  }
  getTopSelledByMonth() {
    return axios.get(API + "/shopList/topProductsByMonth");
  }
  getSingleList(id) {
    return axios.get(API + "/shopList/" + id);
  }
}

export default new ListServices();
