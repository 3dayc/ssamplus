import Vue from 'vue';
import axios from 'axios';

let config = {
  baseURL: process.env.VUE_APP_API_URL || 'http://localhost:4141',
  // timeout: 5000 
}

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {    
    config.headers.token = localStorage.getItem('access_token');
    return config;
  },
  function(error) {      
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  response => {
    // console.log(response);
    return response.data;
  },
  error => {    
    if (!error.response) {
      console.log("Please check your internet connection.");
    }
    return Promise.reject(error.response);
  }
);

// Vue.use(_axios);
Vue.axios = _axios;
window.axios = _axios;