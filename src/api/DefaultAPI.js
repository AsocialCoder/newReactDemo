import Axios from "axios";
import _ from "lodash";

const API_URL = "http://localhost:3010/api";

const buildRequestForApi = (endpoint, method, requestObj) => {

  

  let token = "";
  const userData = localStorage.getItem("userData");
  if(userData !== null )
  {
    token = JSON.parse(userData).token;
  }
  

  return {
    url: `${API_URL}${endpoint}`,
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Authorization" :`Bearer ${method !== "/login" ? token : ""}`
    },
    data: {
      ...requestObj
    }
  };
};

const DefaultAPI = (API_KEY, method, requestObj) => {
  return Axios(
    buildRequestForApi(
      API_KEY,
      method,
      requestObj
    )
  );
};

export default DefaultAPI;
