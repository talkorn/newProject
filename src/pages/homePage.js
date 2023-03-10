import initialPicturesList from "../components/List.js";
import initialPicturesCards from "../components/cards.js";
import initialPicturesCarousel from "../components/carousel.js";
import checkIfAdmin from "../utils/checkIfAdmin.js";
import { addtofavorite, initialfavorite } from "../pages/favoritePics.js";
let picturesArr;
let cardsDisplayButton;
let carouselDisplayButton;
let listDisplayButton;
let isAdmin;
let favores;
let showAddPic = document.getElementById("addPicTytle");
let favoritePageNav = document.getElementById("nav-favorite-page");

console.log(
  "🚀 ~ file: homePage.js:20 ~ window.addEventListener ~ favores:",
  favores
);
let addPicPageNav = document.getElementById("nav-add-pic-page");

window.addEventListener("load", () => {
  picturesArr = localStorage.getItem("pics");
  isAdmin = checkIfAdmin();
  showAddPic.classList.remove("d-none");
  let existUser = localStorage.getItem("existUser");
  if (!existUser) {
    favoritePageNav.classList.add("d-none");
  } else {
    favoritePageNav.classList.remove("d-none");
  }
  if (!isAdmin) {
    addPicPageNav.classList.add("d-none");
  } else {
    addPicPageNav.classList.remove("d-none");
  }
  if (!picturesArr) {
    return;
  }
  picturesArr = JSON.parse(picturesArr);
  initialHomePage(picturesArr);
  isAdmin = checkIfAdmin();
  document.getElementById("nav-logout-page").addEventListener("click", () => {
    localStorage.setItem("existUser", "");
  });
});
const initialHomePage = (picturesArr1) => {
  picturesArr = picturesArr1;
  initialPicturesList(picturesArr);
  initialPicturesCards(picturesArr);
  initialPicturesCarousel(picturesArr);
  initialfavorite();
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
  initialPicturesCarousel(picturesArr);
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
