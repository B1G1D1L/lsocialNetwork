import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '733929ad-448f-47bd-9309-ee6c1f37cf00'
  }
})

export const userAPI = {
  getUsers(pageSize = 10, currentPage = 1) {
    return instance.get(`users/?count=${pageSize}&page=${currentPage}`)
      .then(response => response.data);
  },
  getAuth() {
    return authAPI.me();
  },
  getUnfollow(userId) {
    return instance.delete(`follow/${userId}`)
    .then(response => response.data);
  },
  getFollow(userId) {
    return instance.post(`follow/${userId}`)
    .then(response => response.data);
  },
  
}

export const profileAPI = {

  getUserProfile(userId) {
    return instance.get(`profile/${userId}`);
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },

  updateStatus(status){
    return instance.put(`profile/status`, {status: status})
  },
  
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
      .then(response => response.data);
  },

  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe});
  },

  logout() {
    return instance.delete(`auth/login`);
  }
}

