import User from '../models/user'

export const signUpPersonalRepository = async (data) => {
  try {
    return await User(data).save()
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}
