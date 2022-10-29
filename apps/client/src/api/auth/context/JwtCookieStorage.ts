import Cookie from 'js-cookie'

const JWT_KEY = 'jwt'

export class JwtCookieStorage {
  set(value: string) {
    Cookie.set(JWT_KEY, value)
  }

  get() {
    return Cookie.get(JWT_KEY)?.toString()
  }
}

export const useJwtCookieStorage = () => {
  return new JwtCookieStorage()
}
