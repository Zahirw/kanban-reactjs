import apiClient from '../axios'

export const getListItems = (id) => {
  return apiClient({
    method: 'get',
    url: `todos/${id}/items`,
  })
}
export const createItems = (id, data) => {
  return apiClient({
    method: 'post',
    url: `todos/${id}/items`,
    data
  })
}
export const updateItems = (id, data, itemId) => {
  return apiClient({
    method: 'patch',
    url: `todos/${id}/items/${itemId}`,
    data
  })
}
export const deleteItems = (id, itemId) => {
  return apiClient({
    method: 'delete',
    url: `todos/${id}/items/${itemId}`,
  })
}