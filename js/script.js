var loginLink = document.querySelector(".contacts button");
var writeusPopup = document.querySelector(".write-us-popup");
var popupclose = document.querySelector(".close-window");
var catalogPopup = document.querySelector(".catalog-popup-hide");
var catalogPopuplink = document.querySelector(".catalog-popup-open");
var mapPopup = document.querySelector(".map-popup")
var mapPopupOpen = document.querySelector(".contacts a")
var mapCloselink = document.querySelector(".close-window-map")
catalogPopuplink.addEventListener("mouseover", function(evt) {
  evt.preventDefault()
  catalogPopup.classList.add("catalog-popup")
});
catalogPopuplink.addEventListener("mouseout", function(evt) {
  evt.preventDefault()
  catalogPopup.classList.remove("catalog-popup")
});
loginLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeusPopup.classList.add("modal-show");
});
popupclose.addEventListener("click", function(evt){
    evt.preventDefault()
    writeusPopup.classList.remove("modal-show")
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (writeusPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        writeusPopup.classList.remove("modal-show");
      }
    }
  });
mapPopupOpen.addEventListener("click", function(evt) {
  evt.preventDefault()
  mapPopup.classList.remove("close-map")
  mapPopup.classList.add("modal-show")
})
mapCloselink.addEventListener("click", function(evt){
  evt.preventDefault()
  mapPopup.classList.remove("modal-show")
  mapPopup.classList.add("close-map")
});
