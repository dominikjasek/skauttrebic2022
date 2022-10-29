import { $fetch, FetchOptions, FetchRequest } from 'ohmyfetch'

const initApiCall = () => {
  return async (request: FetchRequest, fetchRequest?: FetchOptions) => {
    fetchRequest = fetchRequest ?? {}
    fetchRequest.baseURL = process.env.API_URL
    return await $fetch(request, fetchRequest)
  }
}

export const apiCall = initApiCall()

export type IApiCall = typeof apiCall
