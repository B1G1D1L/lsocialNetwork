import { UsersType } from "../types/types";
import { APIResponseType, instance } from "./api";

type GetUsersResponseType = {
  items: Array<UsersType>
  totalCount: number
  error: string
}

export const userAPI = {
  // Получить страницу с пользователями
  getUsers(pageSize = 10, currentPage = 1) {
    return instance.get<GetUsersResponseType>(`users/?count=${pageSize}&page=${currentPage}`)
      .then(response => response.data);
  },
  // Подписаться на пользователя
  getUnfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
    .then(response => response.data);
  },
  // Отписаться от пользователя
  getFollow(userId: number) {
    return instance.post<APIResponseType<{}>>(`follow/${userId}`)
    .then(response => response.data);
  },
}