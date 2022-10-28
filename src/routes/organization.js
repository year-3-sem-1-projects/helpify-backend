import { Router } from 'express'
import {
  getOrganizations,
  getOrganization,
  getOrganizationEvents,
  getOrganizationEvent,
  addOrganization,
  addEvent,
  addStory,
  deleteOrganization,
  deleteEvent,
  deleteStory,
  updateOrganization,
  updateEvent,
  updateStory,
} from '../controllers/user'

const router = Router()

router.get('/', getOrganizations)
router.get('/:organizationId', getOrganization)
router.get('/:organizationId/events', getOrganizationEvents)
router.get('/:organizationId/event/:eventId', getOrganizationEvent)
router.push('/add/organization', addOrganization)
router.push('/add/event', addEvent)
router.push('/add/story/:organizationId', addStory)
router.delete('/delete/organization/:organizationId', deleteOrganization)
router.delete('/delete/event/:eventId', deleteEvent)
router.delete('/delete/story/:storyId', deleteStory)
router.put('/update/organization', updateOrganization)
router.put('/update/event', updateEvent)
router.put('/update/story', updateStory)

export default router
