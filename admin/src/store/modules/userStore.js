// import axios from 'axios';
import router from '@/router';

// state
export const state = {
  userName: ''
};

// mutations
export const mutations = {
  LOGIN(state, data) {
    state.userName = data.userName;
    router.replace({ name: 'UserMgt' });
  },
  LOGOUT(state) {
    state.userName = '';
    router.replace({ name: 'AdminLogin' });
  }
};

// actions
export const actions = {
  LOGIN({ commit }, data) {
    commit('LOGIN', data);    
  },
  LOGOUT({ commit }) {
    commit('LOGOUT');
  }
};

export const getters = {
  getUserName(state) {    
    return state.userName;
  },
  
};
