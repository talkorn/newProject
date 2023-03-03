import validEmail from "../validation/emailValidation.js";
import validPassword from "../validation/passwordValid.js";
import { pageChange } from "../routes/router.js";
import PAGES from "../models/pageModel.js";

let emailFromLogin = document.getElementById("emailFromLogin");
let passwordFromLogin = document.getElementById("passwordFromLogin");
let validationEmailLogin = document.getElementById("validationEmailLogin");
let validationPasswordLogin = document.getElementById(
  "validationPasswordLogin"
);
let LoginBotton = document.getElementById("LoginBotton");
let emailbtnValid = false;
let btnsValid;
let password1;
let email1;
let passworsbtnValid = false;
let exsist = false;
let users;
emailFromLogin.addEventListener("input", () => {
  users = localStorage.getItem("users");

  users = JSON.parse(users);
  checkEmail(emailFromLogin, validationEmailLogin);
  if (btnsValid) {
    emailbtnValid = true;
    btnok();
  }
});

const checkEmail = (theEmail, err) => {
  email1 = validEmail(theEmail.value);

  if (!email1.length) {
    err.classList.add("d-none");
    return (btnsValid = true);
    /* the button can work */
  } else {
    /* error */
    err.innerHTML = email1;
    err.classList.remove("d-none");
    return (btnsValid = false);
  }
};

passwordFromLogin.addEventListener("input", () => {
  checkPassword(passwordFromLogin, validationPasswordLogin);
  if (btnsValid) {
    passworsbtnValid = true;
    btnok();
  }
});

const checkPassword = (thePassword, err) => {
  password1 = validPassword(thePassword.value);
  if (!password1.length) {
    err.classList.add("d-none");
    return (btnsValid = true);

    /* the button can work */
  } else {
    /* error */
    err.innerHTML = password1;
    return (btnsValid = false);
  }
};
let existUser;

console.log("🚀 ~ file: login.js:68 ~ users:", users);
const checkIfEmailAndPasswordExist = () => {
  if (!users) {
    return;
  }
  for (let user of users) {
    if (emailFromLogin.value == user.email) {
      if (passwordFromLogin.value == user.password) {
        existUser = user;
        exsist = true;
        return;
      } else {
        validationPasswordLogin.innerHTML = "wrong Mail or Password";
        validationPasswordLogin.classList.add("d-block");
        validationPasswordLogin.classList.remove("d-none");
        passworsbtnValid = false;
      }
    }
  }
};
const btnok = () => {
  console.log(passworsbtnValid, emailbtnValid, exsist);
  checkIfEmailAndPasswordExist();
  if (passworsbtnValid && emailbtnValid && exsist) {
    console.log(passworsbtnValid, emailbtnValid, exsist);
    LoginBotton.disabled = false;
    LoginBotton.addEventListener(
      "click",
      () => {
        existUser = JSON.stringify(existUser);
        localStorage.setItem("existUser", existUser);
        document.getElementById("beforeSignIn").classList.add("d-none");
        document.getElementById("afterSignIn").classList.remove("d-none");
        /* pageChange(PAGES.PROFILE) */
        location.reload();
      },
      { once: true }
    );
  }
};
