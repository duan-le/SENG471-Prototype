const EXTERIOR_COLOUR_PATH = "./assets/camry/exterior/";
const INTERIOR_COLOUR_PATH = "./assets/camry/interior/";

function showInteriorView() {
  document.querySelector(".exterior-view").classList.add("hidden");
  document.querySelector(".interior-view").classList.remove("hidden");
  document
    .querySelector(".interior-colour-btn-group")
    .classList.remove("hidden");
  document.querySelector(".exterior-colour-btn-group").classList.add("hidden");
}

function showExteriorView() {
  document.querySelector(".exterior-view").classList.remove("hidden");
  document.querySelector(".interior-view").classList.add("hidden");
  document.querySelector(".interior-colour-btn-group").classList.add("hidden");
  document
    .querySelector(".exterior-colour-btn-group")
    .classList.remove("hidden");
}

function blueExterior() {
  document
    .querySelector(".exterior-side")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "blue.png");
  document
    .querySelector(".exterior-front")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "blue_front.png");
}

function greyExterior() {
  document
    .querySelector(".exterior-side")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "grey.png");
  document
    .querySelector(".exterior-front")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "grey_front.png");
}

function redExterior() {
  document
    .querySelector(".exterior-side")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "red.png");
  document
    .querySelector(".exterior-front")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "red_front.png");
}

function silverExterior() {
  document
    .querySelector(".exterior-side")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "silver.png");
  document
    .querySelector(".exterior-front")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "silver_front.png");
}

function whiteExterior() {
  document
    .querySelector(".exterior-side")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "white.png");
  document
    .querySelector(".exterior-front")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "white_front.png");
}

function beigeInterior() {
  document
    .querySelector(".interior-view")
    .setAttribute("src", INTERIOR_COLOUR_PATH + "beige.jpg");
}

function blackInterior() {
  document
    .querySelector(".interior-view")
    .setAttribute("src", INTERIOR_COLOUR_PATH + "black.jpg");
}

function redInterior() {
  document
    .querySelector(".interior-view")
    .setAttribute("src", INTERIOR_COLOUR_PATH + "red.jpg");
}
