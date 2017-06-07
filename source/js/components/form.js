import utils from '../libs/utils'

let forms = document.querySelectorAll('.js-form')

let form = {
  $el: null,

  init(el) {
    this.$el = el
    el.addEventListener('submit', (event) => { this.handleSubmit(event) })
  },

  handleSubmit(e) {
    e.preventDefault()

    let btn = this.$el.querySelector('button')
    btn.disabled = true
    btn.innerHTML = 'Loading...'

    this.sendEmail()
  },

  sendEmail() {
    storyblok.init({accessToken: this.$el.getAttribute('data-token')})
    storyblok.sendEmail(utils.serialize(this.$el),
      (data) => {
        this.$el.innerHTML = 'Thank you! We will get back to you soon.'
      },
      (data) => {
        this.$el.innerHTML = 'Something went wrong. Please try again.'
      })
  }
}

for (var i = 0; i < forms.length; i++) {
  form.init(forms[i])
}

export default form
