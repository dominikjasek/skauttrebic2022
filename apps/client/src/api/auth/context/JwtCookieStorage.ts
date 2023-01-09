import Cookie from 'js-cookie'

const JWT_KEY = 'jwt'
const EXPIRES_IN = 1825 // days

export class JwtCookieStorage {
  set(value: string) {
    Cookie.set(JWT_KEY, value, { expires: EXPIRES_IN })
  }

  get() {
    return Cookie.get(JWT_KEY)?.toString()
  }

  delete() {
    Cookie.remove(JWT_KEY)
  }
}

export const useJwtCookieStorage = () => {
  return new JwtCookieStorage()
}
