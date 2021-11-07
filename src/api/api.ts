import axios from 'axios';
import { PhotosType, ProfileType, UsersType } from '../types/types';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '280a39d1-a61d-4107-9bf3-5832894d4688'
  }
})

type GetUsersResponseType = {
  items: Array<UsersType>
  totalCount: number
  error: string
}
type ResponseType = {
  resultCode: number
  messages: number
  data: any
}

export const userAPI = {
  // Получить страницу с пользователями
  getUsers(pageSize = 10, currentPage = 1) {
    return instance.get<GetUsersResponseType>(`users/?count=${pageSize}&page=${currentPage}`)
      .then(response => response.data);
  },
  // Подписаться на пользователя
  getUnfollow(userId: number) {
    return instance.delete<ResponseType>(`follow/${userId}`)
    .then(response => response.data);
  },
  // Отписаться от пользователя
  getFollow(userId: number) {
    return instance.post<ResponseType>(`follow/${userId}`)
    .then(response => response.data);
  },
}

type SavePhotoResponseType = {
  data: PhotosType
  resultCode: number
  messages: Array<string>
}

export const profileAPI = {
  // Получить инфо о всем профиле
  getUserProfile(userId: number) {
    return instance.get<ProfileType>(`profile/${userId}`)
      .then(resp => resp.data);
  },
  // Получить статус
  getStatus(userId: number) {
    return instance.get<any>(`profile/status/${userId}`);
  },
  // Обновить статус
  updateStatus(status: string) {
    return instance.put<ResponseType>(`profile/status`, {status: status})
  },
  // Обновить главное фото профиля
  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append('image', photoFile); // Для input type='file'

    return instance.put<SavePhotoResponseType>(`profile/photo`, formData, photoFile)
      .then(resp => resp.data);
  }
};

type MeResponseType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: number
  messages: Array<string>
}
type LoginResponseType = {
  resultCode: number
  messages: Array<number>
  data: {
    userId: number
  }
}

export const authAPI = {
  // Авторизованы 'true/false'
  me() {
    return instance.get<MeResponseType  >(`auth/me`)
      .then(response => response.data);
  },
  // Залогиниться
  login(email: string, password: string, rememberMe = false) {
    return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe})
      .then(response => response.data);
  },
  // Разлогиниться
  logout() {
    return instance.delete<LoginResponseType>(`auth/login`);
  }
}

