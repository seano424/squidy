const postReview = () => {
  const newReview = document.getElementById("new_review");
  console.log(newReview);
  if (newReview) {
    newReview.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log(event);
    })
  }
}

export { postReview };
