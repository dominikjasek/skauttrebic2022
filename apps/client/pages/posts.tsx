import React, { useLayoutEffect } from 'react'
import { useUser } from '~/src/api/auth/context/AuthContext'
import { useRouter } from 'next/router'
import Routes from '~/config/routes'

export const posts: React.FC = () => {
  const user = useUser()
  const router = useRouter()

  useLayoutEffect(() => {
    // checks if the user is authenticated
    if (user === null) {
      router.push(Routes.login)
    }
  }, [])

  return (
    <div>posts</div>
  )
}

export default posts
