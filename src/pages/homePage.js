import initialPicturesList from "../components/List.js";
import initialPicturesCards from "../components/cards.js";
import initialPicturesCarousel from "../components/carousel.js";
import checkIfAdmin from "../utils/checkIfAdmin.js";
let picturesArr;
let cardsDisplayButton;
let carouselDisplayButton;
let listDisplayButton;
let isAdmin;
window.addEventListener("load", () => {
  picturesArr = localStorage.getItem("pics");

  if (!picturesArr) {
    return;
  }
  picturesArr = JSON.parse(picturesArr);
  initialHomePage();
  isAdmin = checkIfAdmin();
  document.getElementById("nav-logout-page").addEventListener("click", () => {
    localStorage.setItem("existUser", "");
  });
});
const initialHomePage = (picturesAr) => {
  initialPicturesList(picturesArr);
  initialPicturesCards(picturesArr);
  initialPicturesCarousel(picturesArr);
};
let pictureSort;
let buttonSortUp = document.getElementById("buttonSortUp");
let buttonSortDowm = document.getElementById("buttonSortDown");
cardsDisplayButton = document.getElementById("cardsDisplayButton");
carouselDisplayButton = document.getElementById("carouselDisplayButton");
listDisplayButton = document.getElementById("listDisplayButton");
/* display change in home page */
buttonSortUp.addEventListener("click", () => {
  sortButtons(true);
});
buttonSortDowm.addEventListener("click", () => {
  sortButtons(false);
});
const sortButtons = (abc) => {
  if (abc) {
    picturesArr = picturesArr.sort((a, b) => a.alt.localeCompare(b.alt));
  } else {
    picturesArr = picturesArr.sort((a, b) => b.alt.localeCompare(a.alt));
  }
  initialPicturesList(picturesArr);
  initialPicturesCards(picturesArr);
};
cardsDisplayButton.addEventListener("click", () => {
  document
    .getElementById("home-page-pictures-cards")
    .classList.remove("d-none");
  document.getElementById("homePagePictureDiv").classList.add("d-none");
  document
    .getElementById("home-page-pictures-carousel")
    .classList.add("d-none");
  document.getElementById("cardpopup").classList.add("d-none");
});
carouselDisplayButton.addEventListener("click", () => {
  document.getElementById("home-page-pictures-cards").classList.add("d-none");
  document.getElementById("homePagePictureDiv").classList.add("d-none");
  document
    .getElementById("home-page-pictures-carousel")
    .classList.remove("d-none");
  document.getElementById("cardpopup").classList.add("d-none");
});
listDisplayButton.addEventListener("click", () => {
  document.getElementById("home-page-pictures-cards").classList.add("d-none");
  document.getElementById("homePagePictureDiv").classList.remove("d-none");
  document
    .getElementById("home-page-pictures-carousel")
    .classList.add("d-none");
  document.getElementById("cardpopup").classList.add("d-none");
});

export default initialHomePage;
