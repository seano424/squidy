const collapseBtn = () => {
  const truncatedInfo = document.querySelector('.truncate-me');
  const seeReviews = document.querySelector('.see-more-reviews');
  const placeInput = document.querySelector('.place-reviews')
  const collapseBtn = document.querySelector('.collapse-text');
  const findOutMoreBtn = document.querySelectorAll('.find-out-more');

  collapseBtn.addEventListener('click', () => {
    console.log(collapseBtn.innerHTML);
    if (collapseBtn.innerHTML === "See more") {
      collapseBtn.innerHTML = "See less"
    } else {
      collapseBtn.innerHTML = "See more"
    }
  })

  findOutMoreBtn.forEach(function(element) {
    element.addEventListener('click', () => {
      console.log(element.previousElementSibling.innerHTML);
      element.previousElementSibling.classList.toggle('truncate-me');
        if (element.innerHTML === "more") {
          element.innerHTML = "less"
        } else {
          element.innerHTML = "more"
        }


    })
  })

  seeReviews.addEventListener('submit', (event) => {
    event.preventDefault();
    const allReviews = placeInput.value;
    allReviews.forEach(function(event) {
      console.log(event);
    })
  })
  // findOutMoreBtn.addEventListener('click', () => {
  //   console.log(truncatedInfo.textContent);
  //   truncatedInfo.classList.toggle('truncate-me');
  // })

}

export { collapseBtn }
