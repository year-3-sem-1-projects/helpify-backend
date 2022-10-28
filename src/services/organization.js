import { addOrganizationRepository, getOrganizationsRepository } from '../repository/organization'

export const addOrganizationService = async (data) => {
  return await addOrganizationRepository(data)
}

export const getOrganizationsService = async () => {
  return await getOrganizationsRepository()
}
