import Cookie from 'js-cookie'

const JWT_KEY = 'jwt'

export class JwtCookieStorage {
  set(value: string) {
    Cookie.set(JWT_KEY, value)
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
