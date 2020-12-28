const collapseBtn = () => {
  const collapseBtn = document.querySelector('.collapse-text');
  const findOutMoreBtn = document.querySelector('.find-out-more');
  const truncatedInfo = document.querySelector('.truncate-me');
  const seeReviews = document.querySelector('.see-more-reviews');
  const placeInput = document.querySelector('.place-reviews')

  collapseBtn.addEventListener('click', () => {
    console.log(collapseBtn.innerHTML);
    if (collapseBtn.innerHTML === "See more") {
      collapseBtn.innerHTML = "See less"
    } else {
      collapseBtn.innerHTML = "See more"
    }
  })

  findOutMoreBtn.addEventListener('click', () => {
    console.log(truncatedInfo.textContent);
    truncatedInfo.classList.toggle('truncate-me');
    if (findOutMoreBtn.innerHTML === "more") {
      findOutMoreBtn.innerHTML = "less"
    } else {
      findOutMoreBtn.innerHTML = "more"
    }
  })

  seeReviews.addEventListener('submit', (event) => {
    event.preventDefault();
    const allReviews = placeInput.value;
    allReviews.forEach(function(event) {
      console.log(event);
    })
  })

}

export { collapseBtn }