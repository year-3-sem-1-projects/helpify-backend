import { Router } from 'express'
import {
  signUpPersonal,
  signUpOrganization,
  signUpInstitution,
  PersonalLogin,
  OrganizationLogin,
  InstitutionLogin,
  signOut,
} from '../controllers/auth'

const router = Router()

router.post('/sign-up/personal', signUpPersonal)
router.post('/sign-up/charity', signUpOrganization)
router.post('/sign-up/institution', signUpInstitution)
router.post('/sign-in/personal', PersonalLogin)
router.post('/sign-in/organization', OrganizationLogin)
router.post('/sign-in/institution', InstitutionLogin)
router.post('/sign-out', signOut)

export default router
