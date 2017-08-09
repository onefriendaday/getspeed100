import utils from '../libs/utils'
import api from '../libs/api'

let forms = document.querySelectorAll('[data-login]')

let form = {
  $el: null,
  $btn: null,
  btnValue: '',

  init(el) {
    this.$el = el
    el.addEventListener('submit', (event) => { this.handleSubmit(event) })
  },

  handleSubmit(e) {
    e.preventDefault()

    this.$btn = this.$el.querySelector('button')
    this.$btn.disabled = true
    this.btnValue = this.$btn.innerHTML
    this.$btn.innerHTML = 'Loading...'

    this.login()
  },

  enableButton() {
    this.$btn.disabled = false
    this.$btn.innerHTML = this.btnValue
  },

  login() {
    api.init().post('users/login', utils.serialize(this.$el))
      .then((res) => {
        this.enableButton()
        api.setToken(res.data.access_token)
        window.location.hash = 'close'
      })
      .catch((res) => {
        this.enableButton()
        alert('Please try again')
        console.log(res)
      })
  }
}

for (var i = 0; i < forms.length; i++) {
  form.init(forms[i])
}

export default form
