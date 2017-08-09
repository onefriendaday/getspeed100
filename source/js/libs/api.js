import axios from 'axios'

export default {
  init() {
    return axios.create({
      baseURL: 'https://api.storyblok.com/v1/',
      headers: {
        'Authorization': window.sessionStorage.getItem('token')
      }
    })
  },

  setToken(token) {
    window.sessionStorage.setItem('token', token)
  }
}
