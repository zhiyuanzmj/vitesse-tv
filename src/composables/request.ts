import axios from 'axios'
import {
  Message,
} from 'element-ui'
import { user } from '@/store/user'

export const useApi = axios.create({
  baseURL: '/api/tv', // url = base url + request url
  timeout: 50000, // request timeout
})

useApi.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    if (user.token)
      config.headers.token = user.token

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// response interceptor
useApi.interceptors.response.use(
  (response, error) => {
    const res = response.data
    if (res.code === 401) {
      user.token = ''
      location.reload()
    }

    if (['blob', 'text'].includes(response.config.responseType))
      return response
    if (res.code !== 200 && res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 2500,
      })
      return Promise.reject(res)
    }
    return res.data
  },
  (error) => {
    if (!error.message || !error)
      return false

    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  },
)
