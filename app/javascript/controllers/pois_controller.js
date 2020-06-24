import ApplicationController from './application_controller'
import Rails from '@rails/ujs'

export default class extends ApplicationController {
  static targets = ['address']

  add(e) {
    Rails.stopEverything(e)

    this.stimulate('PoisReflex#add', this.addressTarget.value)
  }

  afterAdd() {
    this.addressTarget.value = ''
  }
}
