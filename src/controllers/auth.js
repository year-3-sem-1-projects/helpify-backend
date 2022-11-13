import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { signUpPersonalService } from '../services/auth'
import { createUser, signOutUser, signIn } from '../database/firebase'

export const signUpPersonal = asyncHandler(async (req, res, next) => {
  const { user_email, password } = req.body
  const { uid } = await createUser(user_email, password)
  const response = await signUpPersonalService({ user_email, uid })
  if (!response) return makeResponse({ res, status: 500, message: 'Sign Up failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Sign Up Successful.' })
})

export const signUpOrganization = asyncHandler(async (req, res, next) => {
    const { user_email, password } = req.body
    const { uid } = await createUser(user_email, password)
    const response = await signUpOrganizationService({ user_email, uid })
    if (!response) return makeResponse({ res, status: 500, message: 'Sign Up failed' })
    if (response.status) return makeResponse({ res, ...response })
    return makeResponse({ res, message: 'Sign Up Successful.' })
    })

    