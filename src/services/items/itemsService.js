import apiClient from '../axios'

export const getListItems = (id) => {
  return apiClient({
    method: 'get',
    url: `todos/${id}/items`,
    // data: payload,
  })
}