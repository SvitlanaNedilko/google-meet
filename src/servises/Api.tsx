import axios, { AxiosRequestConfig } from 'axios'

const apiServise = axios.create({
  baseURL: 'https://googlemeetapi.herokuapp.com/api',
})

export function getRandomCat() {
  return apiServise.get('/cats/random')
}

export function getUsers() {
  return apiServise.get('/users')
}
