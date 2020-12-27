const collapseBtn = () => {
  const truncatedInfo = document.querySelector('.truncate-me');
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

  // findOutMoreBtn.addEventListener('click', () => {
  //   console.log(truncatedInfo.textContent);
  //   truncatedInfo.classList.toggle('truncate-me');
  // })

}

export { collapseBtn }