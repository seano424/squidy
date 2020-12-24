const searchMap = () => {
  const mapboxCtrl = document.querySelector('.mapboxgl-ctrl');
  if (mapboxCtrl) {
    mapboxCtrl.classList.add('mapboxgl-ctrl-geocoder--collapsed')
    mapboxCtrl.addEventListener('mouseover', () => {
      mapboxCtrl.classList.remove('mapboxgl-ctrl-geocoder--collapsed')
    })
    mapboxCtrl.addEventListener('mouseout', () => {
      mapboxCtrl.classList.add('mapboxgl-ctrl-geocoder--collapsed')
    })
  }
}

// mapboxgl-ctrl-geocoder--collapsed

export { searchMap }