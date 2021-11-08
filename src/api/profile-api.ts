import { PhotosType, ProfileType } from "../types/types";
import { APIResponseType, instance } from "./api";


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
    return instance.put<APIResponseType>(`profile/status`, {status: status}).then(res => res.data) 
  },
  // Обновить главное фото профиля
  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append('image', photoFile); // Для input type='file'

    return instance.put<APIResponseType<PhotosType>>(`profile/photo`, formData, photoFile)
      .then(resp => resp.data);
  }
};
