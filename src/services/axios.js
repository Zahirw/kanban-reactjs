import axios from 'axios'

const apiClient = axios.create({
  baseURL:  process.env.REACT_APP_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
const token = process.env.REACT_APP_TOKEN

apiClient.interceptors.request.use(
  request => {
    request.headers.Authorization = `Bearer ${token}`;
    request.headers.Accept = "application/json";
    return request
  },
  error => {
    return Promise.reject(error)
  },
)

export default apiClient