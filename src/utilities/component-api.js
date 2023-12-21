import config from '../config'

export const login = async () => {
  const url = new URL('/auth/google', config.BASE_URL).href
  const res = await fetch(url)
  if (res.ok) {
    console.log(res)
  } else {
    throw new Error(`Invalid request to ${url}`)
  }
}

export const logout = async () => {
  const url = new URL('/logout', config.BASE_URL).href
  const res = await fetch(url)
  if (res.ok) {
    return null
  } else {
    throw new Error(`Invalid request to ${url}`)
  }
}