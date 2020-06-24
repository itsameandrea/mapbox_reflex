import { Controller } from 'stimulus'
import StimulusReflex from 'stimulus_reflex'
import MapboxController from './mapbox_controller'

export default class extends Controller {
  connect() {
    StimulusReflex.register(this)
  }

  afterReflex() {
    const map = new MapboxController()
    
    map.initMapbox()
  }
}
