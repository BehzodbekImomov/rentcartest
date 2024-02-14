import { API } from "@/constants";
import axios from "axios";

export const request = axios.create({
    baseURL: API,
    timeout: 100000,
    mode: 'cors',
    headers: {
    //   Authorization: token ? `Bearer ${token}` : "",
      'Content-Type': 'application/json',
         'Accept': 'application/json',
         
   
    }
    
  });