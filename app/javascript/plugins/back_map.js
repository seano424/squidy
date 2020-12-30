const backMap = () => {
  const backBtn = document.getElementById('back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      console.log("😲");
      document.getElementById("reviews-content").classList.add("hide-content");
    })
  }
}

export { backMap }
