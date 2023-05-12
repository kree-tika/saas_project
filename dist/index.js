const menu = document.querySelector(".nav-links");
const btn = document.querySelector(".nav-btn");

btn.addEventListener("click", () => {
  menu.style.display = "flex";
  menu.classList.toggle("show-links");
});

var indexValue = 1;
showImg(indexValue);
function btn_slide(e) {
  showImg((indexValue = e));
}

function side_slide(e) {
  showImg((indexValue += e));
}

function showImg(e) {
  var i;
  const img = document.querySelectorAll(".layout");
  const sliders = document.querySelectorAll(".btn-slider span");
  if (e > img.length) {
    indexValue = 1;
  }
  if (e < 1) {
    indexValue = img.length;
  }
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  for (i = 0; i < sliders.length; i++) {
    sliders[i].style.background = " #5b9af34b";
    sliders[i].addEventListener("click", () => {
      img.style.display = "flex";
    });
  }
  img[indexValue - 1].style.display = "flex";
  img[indexValue - 1].style.justifyContent = "center";
  img[indexValue - 1].style.alignItems = "center";
  sliders[indexValue - 1].style.background = "#5b9bf3";
}
