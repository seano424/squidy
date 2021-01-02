const reviewsDisplay = () => {
  const reviewsContent = document.getElementById('reviews-content');
  const title = document.querySelectorAll('.header-name');
  title.forEach((element) => {
    element.addEventListener('click', () => {
      console.log('hello');
      reviewsContent.classList.add('hide-content')
    })
  })
};

export { reviewsDisplay };
