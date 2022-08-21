import axios from "axios";
const API = "http://192.168.0.18:3001";
class ItemServices {
  getItems() {
    return axios.get(API + "/items");
  }
  getSingleItem(id) {
    return axios.get(API + "/items/" + id);
  }
  getCategories() {
    return axios.get(API + "/items/categories");
  }
  postItem(item) {
    return axios.post(API + "/items/", item);
  }
  deleteItem(id) {
    return axios.delete(API + "/items/" + id);
  }
  createList(list) {
    return axios.post(API + "/shopList/", item);
  }
}

export default new ItemServices();