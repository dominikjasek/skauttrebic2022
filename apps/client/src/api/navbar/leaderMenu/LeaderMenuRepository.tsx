import { IApiCall, useApiCall } from '~/src/api/lib/apiCall'
import { MenuItem } from '~/components/Navbar/Navbar.interface'

export interface LeaderMenuType {
  data: {
    attributes: {
      items: MenuItem[]
    }
  }
}

class LeaderMenuRepository {

  constructor(
    private readonly fetch: IApiCall,
  ) {}

  fetchLeaderMenu = async () => {
    return (await this.fetch('/leader-menu?populate=deep')).data as LeaderMenuType
  }
}

export const useLeaderMenuRepository = () => {
  const apiCall = useApiCall()

  return new LeaderMenuRepository(apiCall)
}