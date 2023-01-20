import axios from 'axios'

const apiClient = axios.create({
  baseURL:  process.env.REACT_APP_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use(
  request => {
    request.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMTUsImV4cCI6MTY4MjgxOTMxOH0.DOAeBDtmNZF7u7vLbkZvkSnKg9b8yr29looEbqQ23S0`;
    request.headers.Accept = "application/json";
    return request
  },
  error => {
    return Promise.reject(error)
  },
)

export default apiClient