const backMap = () => {
  const backBtn = document.querySelector('.back-map');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      console.log('hello');
    })
  }
}

export { backMap }
