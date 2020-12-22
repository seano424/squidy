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

const addMarkersToMap = (map, markers) => {
  markers.forEach((marker) => {
    const popup = new mapboxgl.Popup().setHTML(marker.infoWindow);

    const element = document.createElement("div");
    element.className = "marker";
    element.style.backgroundImage = `url('${marker.image_url}')`;
    element.style.backgroundSize = "contain";
    element.style.width = "45px";
    element.style.height = "45px";

    new mapboxgl.Marker(element)
      .setLngLat([marker.lng, marker.lat])
      .setPopup(popup)
      .addTo(map);
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

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );

    map.addControl(new mapboxgl.NavigationControl());
  }
};

export { initMapbox };
