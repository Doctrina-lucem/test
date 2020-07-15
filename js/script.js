var loginLink = document.querySelector(".contacts button");
var writeusPopup = document.querySelector(".write-us-popup")
var popupclose = document.querySelector(".close-window")
loginLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeusPopup.classList.add("modal-show");
})
popupclose.addEventListener("click", function(evt){
    evt.preventDefault()
    writeusPopup.classList.remove("modal-show")
})
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (writeusPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        writeusPopup.classList.remove("modal-show");
      }
    }
  });