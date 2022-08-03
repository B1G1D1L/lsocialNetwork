export type ISignUp = {
  name: string
  email: string
  password: string
}

export type ISignIn = {
  email: string
  password: string
}

export type IUserData = {
  token: string
  name: string
  email: string
}

export type INotifications = {
  messages?: number
  notification?: number
}
