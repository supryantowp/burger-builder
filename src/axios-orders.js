import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-9668d.firebaseio.com/",
});

export default instance;
