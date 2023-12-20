import config from '../config'

export const login = async () => {
  const loginPath = new URL('/auth/google', config.BASE_URL).href
  const res = await fetch(loginPath)
  if (res.ok) {
    return res.json()
  } else {
    throw new Error(`Invalid request to ${loginPath}`)
  }
}