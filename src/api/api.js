import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '280a39d1-a61d-4107-9bf3-5832894d4688'
  }
})

export const userAPI = {
  // Получить страницу с пользователями
  getUsers(pageSize = 10, currentPage = 1) {
    return instance.get(`users/?count=${pageSize}&page=${currentPage}`)
      .then(response => response.data);
  },
  // Подписаться на пользователя
  getUnfollow(userId) {
    return instance.delete(`follow/${userId}`)
    .then(response => response.data);
  },
  // Отписаться от пользователя
  getFollow(userId) {
    return instance.post(`follow/${userId}`)
    .then(response => response.data);
  },
  
}

export const profileAPI = {
  // Получить инфо о всем профиле
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  // Получить статус
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  // Обновить статус
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status})
  },
  // Обновить главное фото профиля
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile); // Для input type='file'

    return instance.put(`profile/photo`, formData, photoFile);
  }
};

export const authAPI = {
  // Авторизованы 'true/false'
  me() {
    return instance.get(`auth/me`)
      .then(response => response.data);
  },
  // Залогиниться
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe});
  },
  // Разлогиниться
  logout() {
    return instance.delete(`auth/login`);
  }
}

