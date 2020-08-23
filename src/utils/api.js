import axios from "axios";


const defaultOptions = {
  baseURL: " http://192.168.1.105:8080/api/",
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  },
  responseType: "json"
}
export default axios.create(defaultOptions);