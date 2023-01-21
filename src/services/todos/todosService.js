import apiClient from '../axios'

export const getListTodos = (payload) => {
  return apiClient({
    method: 'get',
    url: `todos`,
    // data: payload,
  })
}