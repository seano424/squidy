const searchInput = () => {
  const input = document.querySelector('.mapboxgl-ctrl-geocoder--input')
  const listings = document.getElementById('listings')
  function handleSubmit() {
    // console.log(input.value);
    listings.dataset.name = input.value;
    // console.log(listings.dataset.name);
  }
  input.addEventListener('change', handleSubmit)
}

export { searchInput }