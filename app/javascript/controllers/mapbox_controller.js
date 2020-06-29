import { Controller } from 'stimulus'
import mapboxgl from 'mapbox-gl'

let currentInstance = null

export default class extends Controller {
  static targets = ['map', 'wrapper']
  
  connect() {
    this.map = null
    this.markers = null
    this.initMapbox()
  }

  initMapbox() {
    this.markers = JSON.parse(this.wrapperTarget.dataset.markers)
    
    mapboxgl.accessToken = this.wrapperTarget.dataset.mapboxApiKey
    
    this.map = new mapboxgl.Map({
      container: this.mapTarget,
      style: 'mapbox://styles/mapbox/streets-v10',
      zoom: 5,
      center: ['12.4964', '41.9028']
    })

    currentInstance = this

    this.markers.forEach((marker) => {
      this.addMarker(marker)
    })
  }

  showNewMarkers() {
    const allMarkers = JSON.parse(this.wrapperTarget.dataset.markers)

    const newMarkers = allMarkers
      .filter((marker1) => !this.markers.some((marker2) => marker1.name == marker2.name))
  
    newMarkers.forEach(m => {
      this.addMarker(m)
    })
  }

  addMarker(marker) {
    new mapboxgl.Marker().setLngLat([marker.longitude, marker.latitude]).addTo(this.map)
  }
}

export {
  currentInstance
}