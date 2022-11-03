import { useRouter } from 'next/router'

export const useQueryParam = (queryKey: string) => {
  const router = useRouter()

  return router.query[queryKey] ?? router.asPath.match(new RegExp(`[&?]${queryKey}=(.*)(&|$)`))?.[1] ?? null
}
