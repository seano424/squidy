const searchMap = () => {
  const mapboxCtrl = document.querySelector('.mapboxgl-ctrl');
  if (mapboxCtrl) {
    mapboxCtrl.classList.add('mapboxgl-ctrl-geocoder--collapsed')
    mapboxCtrl.addEventListener('mouseover', () => {
      mapboxCtrl.classList.remove('mapboxgl-ctrl-geocoder--collapsed')
    })
    document.addEventListener('click', (e) => {
      console.log(e.target.className === "mapboxgl-ctrl-geocoder--input");
      if (e.target.className !== "mapboxgl-ctrl-geocoder--input") {
          mapboxCtrl.classList.add('mapboxgl-ctrl-geocoder--collapsed')
      }
    })
  }
}


export { searchMap }