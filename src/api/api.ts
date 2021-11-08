import axios from 'axios';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '280a39d1-a61d-4107-9bf3-5832894d4688'
  }
})

export type APIResponseType<D = {}> = {
  data: D
  resultCode: number
  messages: Array<string>
}




