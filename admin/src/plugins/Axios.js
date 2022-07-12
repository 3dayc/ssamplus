import Vue from 'vue';
import axios from 'axios';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

let config = {
  baseURL: process.env.baseURL || process.env.apiUrl || 'http://localhost:4141',
  // withCredentials: true, // Check cross-site Access-Control
  // timeout: 60 * 1000, // Timeout
};

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

// interceptor
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

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;