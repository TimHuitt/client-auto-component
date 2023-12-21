import * as componentAPI from './component-api'

export const userLogin = async () => {
  try {
    const data = await componentAPI.login()
    return data
  } catch (err) {
    console.log(err.message)
  }
}
export const userLogout = async () => {
  try {
     await componentAPI.logout()
  } catch (err) {
    console.log(err.message)
  }
}
