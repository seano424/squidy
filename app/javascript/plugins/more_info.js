const moreInfo = () => {
  const map = document.getElementById('map')
  const config = { attributes: true, childList: true, subtree: true };

  const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            // console.log('The ' + mutation.attributeName + ' attribute was modified.');
            // target: div.mapboxgl-popup.mapboxgl-popup-anchor-bottom
            // console.log(mutation.target);
            const moreInfoBtn = document.querySelector('.more-info-btn');
            moreInfoBtn.addEventListener('click', () => {
              console.log('hello');
            })
        }
    }
};

const observer = new MutationObserver(callback);
observer.observe(map, config);

}

export { moreInfo };

