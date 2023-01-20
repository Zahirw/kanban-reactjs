import apiClient from '../axios'

export const getListItems = (id) => {
  return apiClient({
    method: 'get',
    url: `todos/${id}/items`,
    // data: payload,
  })
}
export const createItems = (id, data) => {
  return apiClient({
    method: 'post',
    url: `todos/${id}/items`,
    data
  })
}