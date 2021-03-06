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
    .querySelectorAll(".exterior-side")
    .forEach((item) =>
      item.setAttribute("src", EXTERIOR_COLOUR_PATH + "blue.png")
    );
  document
    .querySelector(".exterior-front")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "blue_front.png");
  document
    .querySelector(".exterior-back")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "blue_back.png");
}

function greyExterior() {
  document
    .querySelectorAll(".exterior-side")
    .forEach((item) =>
      item.setAttribute("src", EXTERIOR_COLOUR_PATH + "grey.png")
    );
  document
    .querySelector(".exterior-front")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "grey_front.png");
  document
    .querySelector(".exterior-back")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "grey_back.png");
}

function redExterior() {
  document
    .querySelectorAll(".exterior-side")
    .forEach((item) =>
      item.setAttribute("src", EXTERIOR_COLOUR_PATH + "red.png")
    );
  document
    .querySelector(".exterior-front")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "red_front.png");
  document
    .querySelector(".exterior-back")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "red_back.png");
}

function silverExterior() {
  document
    .querySelectorAll(".exterior-side")
    .forEach((item) =>
      item.setAttribute("src", EXTERIOR_COLOUR_PATH + "silver.png")
    );
  document
    .querySelector(".exterior-front")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "silver_front.png");
  document
    .querySelector(".exterior-back")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "silver_back.png");
}

function whiteExterior() {
  document
    .querySelectorAll(".exterior-side")
    .forEach((item) =>
      item.setAttribute("src", EXTERIOR_COLOUR_PATH + "white.png")
    );
  document
    .querySelector(".exterior-front")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "white_front.png");
  document
    .querySelector(".exterior-back")
    .setAttribute("src", EXTERIOR_COLOUR_PATH + "white_back.png");
}

function beigeInterior() {
  document
    .querySelector(".interior-front")
    .setAttribute("src", INTERIOR_COLOUR_PATH + "beige_front.jpg");
  document
    .querySelector(".interior-side")
    .setAttribute("src", INTERIOR_COLOUR_PATH + "beige.jpg");
}

function blackInterior() {
  document
    .querySelector(".interior-front")
    .setAttribute("src", INTERIOR_COLOUR_PATH + "black_front.jpg");
  document
    .querySelector(".interior-side")
    .setAttribute("src", INTERIOR_COLOUR_PATH + "black.jpg");
}

function redInterior() {
  document
    .querySelector(".interior-front")
    .setAttribute("src", INTERIOR_COLOUR_PATH + "red_front.jpg");
  document
    .querySelector(".interior-side")
    .setAttribute("src", INTERIOR_COLOUR_PATH + "red.jpg");
}
