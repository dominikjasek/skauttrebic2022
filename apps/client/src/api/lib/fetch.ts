import { $fetch, FetchOptions, FetchRequest } from 'ohmyfetch'

export const useFetch = () => {
  return async (request: FetchRequest, fetchRequest?: FetchOptions) => {
    fetchRequest = fetchRequest ?? {}
    fetchRequest.baseURL = process.env.API_URL
    return await $fetch(request, fetchRequest)
  }
}

export type IFetch = ReturnType<typeof useFetch>
