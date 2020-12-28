const collapseBtn = () => {
  const truncatedInfo = document.querySelector('.truncate-me');
  const seeReviews = document.querySelectorAll('.see-more-reviews');
  const placeInput = document.querySelectorAll('.place-reviews')
  const collapseBtn = document.querySelectorAll('.collapse-text');
  const findOutMoreBtn = document.querySelectorAll('.find-out-more');

  collapseBtn.forEach(function(element) {
    element.addEventListener('click', () => {
      console.log(element.innerHTML);
        if (element.innerHTML === "See more") {
          element.innerHTML = "See less"
        } else {
          element.innerHTML = "See more"
        }
    }) 
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

  seeReviews.forEach((review) => {
    review.addEventListener('submit', (event) => {
      // event.preventDefault();
      console.log(event.target[0].value[0]);
      // const allReviews = placeInput.value;
      // console.log(allReviews)
      // allReviews.forEach(function(event) {
      //   console.log(event);
      // })
    })
  })
  
  // findOutMoreBtn.addEventListener('click', () => {
  //   console.log(truncatedInfo.textContent);
  //   truncatedInfo.classList.toggle('truncate-me');
  // })

}

export { collapseBtn }
