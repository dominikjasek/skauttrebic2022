import { Axios } from 'axios'

export const useApiAxios = () => {
  return new Axios({ baseURL: process.env.API_URL })
}
