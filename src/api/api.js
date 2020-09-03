import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "83ee89dc-1391-4de4-9c05-ed1d5e1459ce",
  },
})

export const usersAPI = {
  getUsers(count, page) {
    return (
      instance.get(`users?count=${count}&page=${page}`)
        .then(response => response.data)
    )
  },
  getProfile(id) {
    return (
      instance.get(`profile/${id}`)
        .then(response => response.data)
    )
  },
  getStatus(id) {
    return (
      instance.get(`profile/status/${id}`)
    )
  },
  updateStatus(status) {
    return (
      instance.put(`profile/status`, { status: status })
    )
  },
}

export const authAPI = {
  login(userInfo) {
    return (
      instance.post(`auth/login`, {
        ...userInfo
      })
    )
  },
  logout() {
    return (
      instance.delete(`auth/login`)
    )
  },
  isAuth() {
    return (
      instance.get(`auth/me`)
      .then(response => response.data)
    )
  },
}

export const followAPI = {
  follow(id) {
    return (
      instance.post(`follow/${id}`)
        .then(response => response.data)
    )
  },
  unfollow(id) {
    return (
      instance.delete(`follow/${id}`)
      .then(response => response.data)
    )
  },
}