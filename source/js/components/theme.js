import utils from '../libs/utils'
import api from '../libs/api'

let themes = document.querySelectorAll('[data-theme]')

let theme = {
  $el: null,

  init(el) {
    this.$el = el
    el.addEventListener('click', (event) => { this.handleClick(event) })
  },

  handleClick(e) {
    e.preventDefault()

    api.init().post('spaces', {
        dup_id: this.$el.getAttribute('data-theme'),
        space: {
          name: 'Store Theme'
        }
      })
      .then((res) => {
        console.log(res)
        // Todo: Show modal with admin button
        // res.data.space.id
        // res.data.space.domain
      })
      .catch((res) => {
        console.log(res)
        window.location.hash = 'openModal'
      })
  }
}

for (var i = 0; i < themes.length; i++) {
  theme.init(themes[i])
}

export default theme
