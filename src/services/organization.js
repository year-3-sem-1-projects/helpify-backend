import {
  addOrganizationRepository,
  addEventRepository,
  getOrganizationsRepository,
  getOrganizationByIdRepository,
  getEventsRepository,
  getOrganizationEventsRepository,
} from '../repository/organization'

export const addOrganizationService = async (data) => {
  return await addOrganizationRepository(data)
}

export const addEventService = async ({ organizationId }, data) => {
  return await addEventRepository(organizationId, { ...data, event_organizer: organizationId })
}

export const getOrganizationsService = async () => {
  return await getOrganizationsRepository()
}

export const getOrganizationByIdService = async (organizationId) => {
  return await getOrganizationByIdRepository(organizationId)
}

export const getEventsService = async () => {
  return await getEventsRepository()
}

export const getOrganizationEventsService = async (organizationId) => {
  return await getOrganizationEventsRepository(organizationId)
}
