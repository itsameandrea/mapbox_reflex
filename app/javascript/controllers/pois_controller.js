import ApplicationController from './application_controller'
import Rails from '@rails/ujs'
import { currentInstance } from './mapbox_controller'

export default class extends ApplicationController {
  static targets = ['address', 'form']

  add(e) {
    Rails.stopEverything(e)
    this.stimulate('PoisReflex#add', this.addressTarget.value)
  }

  afterAdd() {
    this.addressTarget.value = ''
  }

  afterReflex() {
    currentInstance.showNewMarkers()
  }
}
