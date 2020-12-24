import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

const buildMap = (mapElement) => {
  mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
  return new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/seanpatrick89/ckj1xtpjy29t619o1rifj8w3c",
    center: [-87.070429, 20.629785],
    zoom: 6, // starting zoom
  });
};

const addMarkersToMap = (map, markers) => {
  markers.forEach((marker) => {
    const popup = new mapboxgl.Popup().setHTML(marker.infoWindow);

    const element = document.createElement("div");
    element.className = "marker";
    element.style.backgroundImage = `url('${marker.image_url}')`;
    element.style.backgroundSize = "contain";
    element.style.width = "35px";
    element.style.height = "35px";
    element.id = `marker-${marker.id}`;

    new mapboxgl.Marker(element)
      .setLngLat([marker.lng, marker.lat])
      .setPopup(popup)
      .addTo(map);

    let link = document.getElementById(`link-${marker.id}`);
    link.addEventListener("click", (e) => {
      e.preventDefault();
      /** Check if there is already a popup on the map and if so, remove it */
      let popUps = document.getElementsByClassName("mapboxgl-popup");
      if (popUps[0]) popUps[0].remove();

      new mapboxgl.Popup({ closeOnClick: true })
        .setLngLat([marker.lng, marker.lat])
        .setHTML(marker.infoWindow)
        .addTo(map);

      map.flyTo({
        center: [marker.lng, marker.lat],
        zoom: 15
      });
    });
  });
};

const fitMapToMarkers = (map, markers) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach((marker) => bounds.extend([marker.lng, marker.lat]));
  map.fitBounds(bounds, { padding: 70, maxZoom: 13 });
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
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true
      }));
  }
};

export { initMapbox };
