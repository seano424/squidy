const moreInfo = () => {
  function handleClick() {
    let collapseId = document.getElementById(`collapse-${this.name}`);
    let collapseCardId = document.getElementById(`collapseCard-${this.name}`);
    collapseCardId.classList.toggle("show");
    if (collapseId.textContent === "See more") {
      collapseId.textContent = "See less";
    } else {
      collapseId.textContent = "See more";
    }
  }

  function moveMouse(e) {
    if (e.target && e.target.id == "more-info-id") {
      //do something
      const moreInfoBtn = document.querySelector(".more-info-btn");

      moreInfoBtn.addEventListener("click", handleClick);
    }
  }

  document.addEventListener("mouseover", moveMouse);
  document.addEventListener("mouseout", moveMouse);
};

export { moreInfo };

// const moreInfo = () => {
//   let element = document.getElementById("more-info-id");
//   if (typeof element != "undefined" && element != null) {
//     // Exists.
//     console.log('hello world');
//     const moreInfoBtn = document.querySelector("#more-info-id");

//       function handleClick() {
//         let collapseId = document.getElementById(`collapse-${this.name}`);
//         let collapseCardId = document.getElementById(`collapseCard-${this.name}`);
//         collapseCardId.classList.toggle("show");
//       }
//       moreInfoBtn.addEventListener("click", handleClick);
//     }
//   };

//   export { moreInfo };
