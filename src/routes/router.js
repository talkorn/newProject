import PAGES from "../models/pageModel.js";

const HOMEPAGELINK = document.getElementById(PAGES.HOME);
const ABOUTUSLINK = document.getElementById(PAGES.ABOUTUS);
const ADDPICLINK = document.getElementById(PAGES.ADDPIC);
const SIGNUPLINK = document.getElementById(PAGES.SIGNUP);
const LOGINLINK = document.getElementById(PAGES.LOGIN);
const PROFILELINK = document.getElementById(PAGES.PROFILE);
const LOGOUTLINK = document.getElementById(PAGES.LOGOUT);
const pageChange = (pagetodisplay) => {
  HOMEPAGELINK.classList.remove("d-block");
  ABOUTUSLINK.classList.remove("d-block");
  ADDPICLINK.classList.remove("d-block");
  SIGNUPLINK.classList.remove("d-block");
  LOGINLINK.classList.remove("d-block");
  PROFILELINK.classList.remove("d-block");
  LOGOUTLINK.classList.remove("d-block");

  HOMEPAGELINK.classList.add("d-none");
  ABOUTUSLINK.classList.add("d-none");
  ADDPICLINK.classList.add("d-none");
  SIGNUPLINK.classList.add("d-none");
  LOGINLINK.classList.add("d-none");
  PROFILELINK.classList.add("d-none");
  LOGOUTLINK.classList.add("d-none");

  switch (pagetodisplay) {
    case PAGES.HOME:
      HOMEPAGELINK.classList.add("d-block");
      HOMEPAGELINK.classList.remove("d-none");
      break;
    case PAGES.ABOUTUS:
      ABOUTUSLINK.classList.remove("d-none");
      ABOUTUSLINK.classList.add("d-block");
      break;
    case PAGES.ADDPIC:
      ADDPICLINK.classList.remove("d-none");
      ADDPICLINK.classList.add("d-block");
      break;
    case PAGES.SIGNUP:
      SIGNUPLINK.classList.remove("d-none");
      SIGNUPLINK.classList.add("d-block");
      break;
    case PAGES.LOGIN:
      LOGINLINK.classList.remove("d-none");
      LOGINLINK.classList.add("d-block");
      break;
    case PAGES.PROFILE:
      PROFILELINK.classList.remove("d-none");
      PROFILELINK.classList.add("d-block");
      break;
    case PAGES.LOGOUT:
      HOMEPAGELINK.classList.add("d-block");
      HOMEPAGELINK.classList.remove("d-none");
      document.getElementById("beforeSignIn").classList.remove("d-none");
      document.getElementById("afterSignIn").classList.add("d-none");
      location.reload();
    /* LOGOUTLINK.classList.remove("d-none");
      LOGOUTLINK.classList.add("d-block"); */
  }
};

export { pageChange };
