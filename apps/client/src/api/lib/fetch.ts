import { $Fetch, $fetch, FetchOptions, FetchRequest } from 'ohmyfetch'

export const useFetch = (): $Fetch => {
  return async (request: FetchRequest, fetchRequest?: FetchOptions) => {
    fetchRequest = fetchRequest ?? {}
    fetchRequest.baseURL = process.env.API_URL
    return await $fetch(request, fetchRequest)
  }
}
