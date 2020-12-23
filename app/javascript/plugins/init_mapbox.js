import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

const buildMap = (mapElement) => {
  mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
  return new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/seanpatrick89/ckj0d22lr0qno19o1c5xghwpo",
    center: [-87.070429, 20.629785],
    zoom: 7, // starting zoom
  });
};

const flyToStore = (currentFeature) => {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15
  });
}

function createPopUp(currentFeature) {
  let popUps = document.getElementsByClassName('mapboxgl-popup');
  /** Check if there is already a popup on the map and if so, remove it */
  if (popUps[0]) popUps[0].remove();

  let popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML(`<h3>${currentFeature.properties.name}</h3>` +
      '<h4>' + currentFeature.properties.address + '</h4>')
    .addTo(map);
}


const addMarkersToMap = (map, markers) => {
  markers.forEach((marker) => {
    const popup = new mapboxgl.Popup().setHTML(marker.infoWindow);

    const element = document.createElement("div");
    element.className = "marker";
    element.style.backgroundImage = `url('${marker.image_url}')`;
    element.style.backgroundSize = "contain";
    element.style.width = "45px";
    element.style.height = "45px";
    element.id = `marker-${marker.id}`

    new mapboxgl.Marker(element)
      .setLngLat([marker.lng, marker.lat])
      .setPopup(popup)
      .addTo(map); 

    let link = document.getElementById(`link-${marker.id}`)
    link.addEventListener('click', (e) => {
      e.preventDefault();
      new mapboxgl.Marker(element)
      .setLngLat([marker.lng, marker.lat])
      .setPopup(popup)
      .addTo(map); 
    })
  });
};

const fitMapToMarkers = (map, markers) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach((marker) => bounds.extend([marker.lng, marker.lat]));
  map.fitBounds(bounds, { padding: 70, maxZoom: 15 });
};

const initMapbox = () => {
  const mapElement = document.getElementById("map");
  if (mapElement) {
    const map = buildMap(mapElement);

    const markers = JSON.parse(mapElement.dataset.markers);
    addMarkersToMap(map, markers);
    fitMapToMarkers(map, markers);

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl      
    })

    map.addControl(geocoder);

    geocoder.on('result', function(e) {
      const name = e.result.place_name.split(",")[0]
      const address = e.result.place_name.split(",")[1] + ", " + e.result.place_name.split(",")[2]
      const city = e.result.place_name.split(",")[2]
      const info = 
        `<h2>${name}</h2>
        <p>${address}</p>
        <form action="/places" method="POST">
          <input type="hidden" id="place_name" name="place[name]" value="${name}">
          <input type="hidden" id="place_address" name="place[address]" value="${address}">
          <input type="hidden" id="place_city" name="place[city]" value="${city}">
          <input type="hidden" id="place_latitude" name="place[latitude]" value=${e.result.center[1]}>
          <input type="hidden" id="place_longitude" name="place[longitude]" value=${e.result.center[0]}>
          <button type="submit" class="btn btn-primary">Add to list</button>
        </form>`
      const popupSearch = new mapboxgl.Popup().setHTML(info)
      new mapboxgl.Marker(e)
      .setLngLat(e.result.center)
      .setPopup(popupSearch)
      .addTo(map);
    })

    map.addControl(new mapboxgl.NavigationControl());
  }
};

export { initMapbox };
