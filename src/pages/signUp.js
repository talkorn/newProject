import validName from "../validation/nameValidation.js";
import validEmail from "../validation/emailValidation.js";
import validPassword from "../validation/passwordValid.js";
import User from "../models/users.js";
import { pageChange } from "../routes/router.js";
import PAGES from "../models/pageModel.js";
import validNumbers from "../validation/validNumbers.js";
import validString from "../validation/validationString.js";
let name;
let firstNamebtnValid = false;
let lastNamebtnValid = false;
let email1;
let emailbtnValid = false;
let password1;
let passworsbtnValid = false;
let btnsValid;
let rePassworsbtnValid = false;
let isAdmin = false;

let firstName = document.getElementById("name-from-signUp-page");
let lastName = document.getElementById("lastName-from-signUp-page");
let validationFirstName = document.getElementById("validationFirstName");
let validationLastName = document.getElementById("validationLastName");
let email = document.getElementById("email-from-signUp-page");
let validationEmail = document.getElementById("validationEmail");
let password = document.getElementById("Password-from-signUp-page");
let validationPassword = document.getElementById("validationPassword");
let validationRePassword = document.getElementById("validationRePassword");
let rePassword = document.getElementById("RePassword-from-signUp-page");
let signUpBotton = document.getElementById("signUpBotton");
let AdminCheckBox = document.getElementById("AdminCheckBox");
let stateFromSign = document.getElementById("stateFromSign");
let countryFromSign = document.getElementById("countryFromSign");
let cityFromSign = document.getElementById("cityFromSign");
let streetFromSign = document.getElementById("streetFromSign");
let houseFromSign = document.getElementById("houseFromSign");
let zipFromSign = document.getElementById("zipFromSign");
let numberFromSign = document.getElementById("numberFromSign");
let validationHouseNum = document.getElementById("validationHouseNum");
let validationZipCode = document.getElementById("validationZipCode");
let validationPhoneNumber = document.getElementById("validationPhoneNumber");
let validationState = document.getElementById("validationState");
let validationCountry = document.getElementById("validationCountry");
let validationCity = document.getElementById("validationCity");
let validationStreet = document.getElementById("validationStreet");
streetFromSign.addEventListener("input", () => {
  console.log("houseFromSign", streetFromSign.value);
  CheckString(streetFromSign.value, validationStreet);
});
cityFromSign.addEventListener("input", () => {
  console.log("houseFromSign", cityFromSign.value);
  CheckString(cityFromSign.value, validationCity);
});
countryFromSign.addEventListener("input", () => {
  console.log("houseFromSign", countryFromSign.value);
  CheckString(countryFromSign.value, validationCountry);
});
stateFromSign.addEventListener("input", () => {
  console.log("houseFromSign", stateFromSign.value);
  CheckString(stateFromSign.value, validationState);
});
/* check that all the input are numbers */
numberFromSign.addEventListener("input", () => {
  console.log("houseFromSign", numberFromSign.value);
  CheckNumber(numberFromSign.value, validationPhoneNumber);
});
zipFromSign.addEventListener("input", () => {
  console.log("houseFromSign", zipFromSign.value);
  CheckNumber(zipFromSign.value, validationZipCode);
});
houseFromSign.addEventListener("input", () => {
  CheckNumber(houseFromSign.value, validationHouseNum);
});

const CheckNumber = (theNumber, err) => {
  let NumberFromSignin = validNumbers(theNumber);

  if (!NumberFromSignin.length) {
    err.classList.add("d-none");
    return (btnsValid = true);
    /* the button can work */
  } else {
    /* error */
    err.innerHTML = NumberFromSignin;
    return (btnsValid = false);
  }
};
const CheckString = (theNumber, err) => {
  let stringFromSignin = validString(theNumber);

  if (!stringFromSignin.length) {
    err.classList.add("d-none");
    return (btnsValid = true);
    /* the button can work */
  } else {
    /* error */
    err.innerHTML = stringFromSignin;
    return (btnsValid = false);
  }
};

/* check if first and last name are valid when you change the input */
firstName.addEventListener("input", () => {
  CheckName(firstName, validationFirstName);
  if (btnsValid) {
    firstNamebtnValid = true;
    btnok();
  }
});

lastName.addEventListener("input", () => {
  CheckName(lastName, validationLastName);
  if (btnsValid) {
    lastNamebtnValid = true;
    btnok();
  }
});
const CheckName = (theName, err) => {
  name = validName(theName.value);

  if (!name.length) {
    err.classList.add("d-none");
    return (btnsValid = true);
    /* the button can work */
  } else {
    /* error */
    err.innerHTML = name;
    return (btnsValid = false);
  }
};

/* check if the email is valid when u change the input */
email.addEventListener("input", () => {
  checkEmail(email, validationEmail);
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

/* check if the Passwpord from home signin isgood */
password.addEventListener("input", () => {
  checkPassword(password, validationPassword);
  if (btnsValid) {
    passworsbtnValid = true;
    btnok();
  }
  if (rePassword.value === password.value) {
    rePassworsbtnValid = true;
    validationRePassword.classList.add("d-none");
    btnok();
  } else {
    validationRePassword.innerHTML = "Un correct Password";
    validationRePassword.classList.add("d-block");
    validationRePassword.classList.remove("d-none");
    rePassworsbtnValid = false;
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
/* ccheck if rePassword id similar to Password */
rePassword.addEventListener("input", () => {
  if (rePassword.value === password.value) {
    rePassworsbtnValid = true;
    validationRePassword.classList.add("d-none");
    btnok();
  } else {
    rePassworsbtnValid = false;
    validationRePassword.innerHTML = "Un correct Password";
    validationRePassword.classList.add("d-block");
    validationRePassword.classList.remove("d-none");
  }
});

const btnok = () => {
  if (
    rePassworsbtnValid &&
    passworsbtnValid &&
    emailbtnValid &&
    lastNamebtnValid &&
    firstNamebtnValid
  ) {
    signUpBotton.disabled = false;
  }
};

let users;
signUpBotton.addEventListener(
  "click",
  () => {
    if (AdminCheckBox.checked) {
      isAdmin = true;
    } else {
      isAdmin = false;
    }
    users = localStorage.getItem("users");
    if (users) {
      for (let user of users) {
        if (user.email === email.value) {
          //display msg - email already exists
          validationEmail.innerHTML = "Email already exists";
          validationEmail.classList.remove("d-none");
          emailbtnValid = false;
          signUpBotton.disabled = false;
          return;
        }
      }
    }

    let nextUserId = localStorage.getItem("nextUserId");
    nextUserId = +nextUserId;
    let newUser = new User(
      nextUserId++,
      firstName.value,
      lastName.value,
      email.value,
      password.value,
      isAdmin,
      stateFromSign.value,
      countryFromSign.value,
      cityFromSign.value,
      streetFromSign.value,
      houseFromSign.value,
      zipFromSign.value,
      numberFromSign.value
    );
    localStorage.setItem("nextUserId", nextUserId + "");
    if (!users) {
      //the first user
      users = [newUser];
      // let user = new User(inputName.value, inputEmail.value, inputPassword.value);
      // users = [user]
      localStorage.setItem("users", JSON.stringify(users));
      /*
      JSON.stringify(users) - convert array of objects to string
      localStorage.setItem - store the json string to localStorage with 
        key users 
        and value users as json string
    */
    } else {
      //we have users
      users = JSON.parse(users); // convert from string to array of objects

      for (let user of users) {
        if (user.email === email.value) {
          //display msg - email already exists
          validationEmail.innerHTML = "Email already exists";
          validationEmail.classList.remove("d-none");
          emailbtnValid = false;
          signUpBotton.disabled = true;
          return;
        }
      }
      //user provided new email
      users = [...users, newUser];
      localStorage.setItem("users", JSON.stringify(users));
    }
    pageChange(PAGES.LOGIN);
    /*   location.reload(); */
  }
  /* { once: true } */
);
