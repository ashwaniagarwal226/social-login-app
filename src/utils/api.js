import axios from "axios";

export class Api {

  static createAPI() {
    const url = process.env.REACT_APP_URL;
    
    const defaultOptions = {
      baseURL: url,
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      },
      responseType: "json"
    }
    let apiInstance = axios.create(defaultOptions);
    apiInstance.interceptors.response.use(Api.handleSuccess, Api.handleError);
    return apiInstance;
  }

  static handleSuccess(response) {
    console.log("response-->", response.data);
    return response;
  }

  static handleError(error) {
    console.log("error-->", error);
    return Promise.reject(error);
  }

}

export default Api;