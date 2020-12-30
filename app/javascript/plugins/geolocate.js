const geolocateUser = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      console.log(position, lat, long);
    })
  }
}

export { geolocateUser };
