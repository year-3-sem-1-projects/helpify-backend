import { addOrganizationRepository } from '../repository/organization'

export const addOrganizationService = async (data) => {
  return await addOrganizationRepository(data)
}
