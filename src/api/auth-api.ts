import { APIResponseType, instance } from "./api";

type MeResponseType = {
  id: number
  email: string
  login: string
}
type LoginType = {
  userId: number
}

export const authAPI = {
  // Авторизованы 'true/false'
  me() {
    return instance.get<APIResponseType<MeResponseType>>(`auth/me`)
      .then(response => response.data);
  },
  // Залогиниться
  login(email: string, password: string, rememberMe = false) {
    return instance.post<APIResponseType<LoginType>>(`auth/login`, {email, password, rememberMe})
      .then(response => response.data);
  },
  // Разлогиниться
  logout() {
    return instance.delete<APIResponseType<LoginType>>(`auth/login`);
  }
}