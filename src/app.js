import PAGES from "./models/pageModel.js";
import { pageChange } from "./routes/router.js";
import emptyAddPic from "./pages/addPic.js";
import "./initialData/initialData.js";
import "./pages/homePage.js";
import "./pages/signUp.js";
import "./pages/login.js";
import "./pages/profile.js";
import "./pages/addPic.js";
import "./pages/favoritePics.js";
import "./utils/edit.js";

let afterSignIn = document.getElementById("afterSignIn");
let beforeSignIn = document.getElementById("beforeSignIn");
window.addEventListener("load", () => {
  let existUser = localStorage.getItem("existUser");
  if (existUser) {
    existUser = JSON.parse(existUser);
    beforeSignIn.classList.add("d-none");

    afterSignIn.classList.remove("d-none");
    /*  document.getElementById("nav-profile-page").innerText = existUser.firstName; */
  }
});

document.getElementById("nav-home-page").addEventListener("click", () => {
  pageChange(PAGES.HOME);
});
document.getElementById("nav-about-us-page").addEventListener("click", () => {
  pageChange(PAGES.ABOUTUS);
});
document.getElementById("nav-add-pic-page").addEventListener("click", () => {
  pageChange(PAGES.ADDPIC);
  emptyAddPic();
});
document.getElementById("nav-signup-page").addEventListener("click", () => {
  pageChange(PAGES.SIGNUP);
});
document.getElementById("nav-login-page").addEventListener("click", () => {
  pageChange(PAGES.LOGIN);
});
document.getElementById("nav-profile-page").addEventListener("click", () => {
  pageChange(PAGES.PROFILE);
});
document.getElementById("nav-logout-page").addEventListener("click", () => {
  pageChange(PAGES.LOGOUT);
});
document.getElementById("nav-favorite-page").addEventListener("click", () => {
  pageChange(PAGES.FAVORITE);
});
