import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '733929ad-448f-47bd-9309-ee6c1f37cf00'
  }
})

export const userAPI = {
  getUsers (pageSize = 10, currentPage = 1) {
    return instance.get(`users/?count=${pageSize}&page=${currentPage}`)
      .then(response => response.data);
  },
  getAuth () {
    return instance.get(`auth/me`)
      .then(response => response.data);
  },
  getUnfollow (userId) {
    return instance.delete(`follow/${userId}`)
    .then(response => response.data);
  },
  getFollow (userId) {
    return instance.post(`follow/${userId}`)
    .then(response => response.data);
  }
}


