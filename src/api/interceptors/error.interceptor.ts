import { AxiosError } from 'axios'

export const errorInterceptor = (err: AxiosError) => {
  console.log(err)
  return Promise.reject(err)
}