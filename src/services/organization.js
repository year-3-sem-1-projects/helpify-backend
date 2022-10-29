import {
  addOrganizationRepository,
  getOrganizationsRepository,
  getOrganizationByIdRepository,
} from '../repository/organization'

export const addOrganizationService = async (data) => {
  return await addOrganizationRepository(data)
}

export const getOrganizationsService = async () => {
  return await getOrganizationsRepository()
}

export const getOrganizationByIdService = async (organizationId) => {
  return await getOrganizationByIdRepository(organizationId)
}
