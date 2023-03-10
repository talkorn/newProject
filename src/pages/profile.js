import validName from "../validation/nameValidation.js";
import validEmail from "../validation/emailValidation.js";
import validPassword from "../validation/passwordValid.js";
import { pageChange } from "../routes/router.js";
import PAGES from "../models/pageModel.js";
import validNumbers from "../validation/validNumbers.js";
import validString from "../validation/validationString.js";

let firstNameFromProfile = document.getElementById("firstNameFromProfile");
let lastNameFromProfile = document.getElementById("lastNameFromProfile");
let validationFirstNameFromProfile = document.getElementById(
  "validationFirstNameFromProfile"
);
let validationLastNameFromProfile = document.getElementById(
  "validationLastNameFromProfile"
);
let emailFromProfile = document.getElementById("emailFromProfile");
let validationEmailFromProfile = document.getElementById(
  "validationEmailFromProfile"
);
let cancleButtonProfilePage = document.getElementById(
  "cancleButtonProfilePage"
);
let PasswordFromProfile = document.getElementById("PasswordFromProfile");
let validationPasswordFromProfile = document.getElementById(
  "validationPasswordFromProfile"
);
let validationRePasswordFromPassword = document.getElementById(
  "validationRePasswordFromPassword"
);
let RePasswordFromProfile = document.getElementById("RePasswordFromProfile");
let profileBotton = document.getElementById("profileBotton");
let AdminCheckBoxFromProfile = document.getElementById(
  "AdminCheckBoxFromProfile"
);
let stateFromProfile = document.getElementById("stateFromProfile");
let countryFromProfile = document.getElementById("countryFromProfile");
let cityFromProfile = document.getElementById("cityFromProfile");
let streetFromProfile = document.getElementById("streetFromProfile");
let houseFromProfile = document.getElementById("houseFromProfile");
let zipFromProfile = document.getElementById("zipFromProfile");
let numberFromProfile = document.getElementById("numberFromProfile");
let email1;
let password1;
let btnsValid;
let passworsbtnValid = false;
let rePassworsbtnValid = false;
let emailbtnValid = false;
let firstNamebtnValid = false;
let lastNamebtnValid = false;
let name;

let validationHouseNum = document.getElementById(
  "validationHouseNumFromProfile"
);
let validationZipCode = document.getElementById("validationZipFromProfile");
let validationPhoneNumber = document.getElementById(
  "validationPhoneNumberFromProfile"
);
let validationState = document.getElementById("validationStatefromProfile");
let validationCountry = document.getElementById("validationCountryFromProfile");
let validationCity = document.getElementById("validationCityFromProfile");
let validationStreet = document.getElementById("vvalidationStreetFromProfile");
streetFromProfile.addEventListener("input", () => {
  console.log("houseFromv", streetFromProfile.value);
  CheckString(streetFromProfile.value, validationStreet);
});
cityFromProfile.addEventListener("input", () => {
  console.log("houseFromSign", cityFromProfile.value);
  CheckString(cityFromProfile.value, validationCity);
});
countryFromProfile.addEventListener("input", () => {
  console.log("houseFromSign", countryFromProfile.value);
  CheckString(countryFromSign.value, validationCountry);
});
stateFromProfile.addEventListener("input", () => {
  console.log("houseFromSign", stateFromProfile.value);
  CheckString(stateFromProfile.value, validationState);
});
/* check that all the input are numbers */
numberFromProfile.addEventListener("input", () => {
  console.log("houseFromSign", numberFromProfile.value);
  CheckNumber(numberFromProfile.value, validationPhoneNumber);
});
zipFromProfile.addEventListener("input", () => {
  console.log("houseFromSign", zipFromProfile.value);
  CheckNumber(zipFromProfile.value, validationZipCode);
});
houseFromProfile.addEventListener("input", () => {
  CheckNumber(houseFromProfile.value, validationHouseNum);
});

const CheckNumber = (theNumber, err) => {
  let NumberFromProfile = validNumbers(theNumber);
  console.log(
    "🚀 ~ file: profile.js:95 ~ CheckNumber ~ NumberFromProfile:",
    theNumber,
    NumberFromProfile
  );

  if (!NumberFromProfile.length) {
    err.classList.add("d-none");
    return (btnsValid = true);
    /* the button can work */
  } else {
    /* error */
    console.log("im here?");
    err.innerHTML = NumberFromProfile;
    err.classList.remove("d-none");
    return (btnsValid = false);
  }
};
const CheckString = (theNumber, err) => {
  let stringFromProfile = validString(theNumber);

  if (!stringFromProfile.length) {
    err.classList.add("d-none");
    return (btnsValid = true);
    /* the button can work */
  } else {
    /* error */
    err.innerHTML = stringFromProfile;
    err.classList.remove("d-none");
    return (btnsValid = false);
  }
};

window.addEventListener("load", () => {
  let users = localStorage.getItem("users");
  let existUser = localStorage.getItem("existUser");
  if (existUser) {
    existUser = JSON.parse(existUser);
  }
  cancleButtonProfilePage.addEventListener("click", () => {
    pageChange(PAGES.HOME);
  });

  if (users && existUser) {
    firstNameFromProfile.value = existUser.firstName;
    lastNameFromProfile.value = existUser.lastName;
    stateFromProfile.value = existUser.state;
    countryFromProfile.value = existUser.country;
    cityFromProfile.value = existUser.city;
    streetFromProfile.value = existUser.street;
    houseFromProfile.value = existUser.houseNumber;
    zipFromProfile.value = existUser.zipCode;
    numberFromProfile.value = existUser.phone;
    emailFromProfile.value = existUser.email;
    PasswordFromProfile.value = existUser.password;
    RePasswordFromProfile.value = existUser.password;
    AdminCheckBoxFromProfile.checked = existUser.isAdmin;
  }
});

document.getElementById("profileDiv").addEventListener("input", () => {
  CheckName(firstNameFromProfile, validationFirstNameFromProfile);
  checkPassword(PasswordFromProfile, validationPasswordFromProfile);
  checkEmail(emailFromProfile, validationEmailFromProfile);
  CheckLastName(lastNameFromProfile, validationLastNameFromProfile);
});
firstNameFromProfile.addEventListener("input", () => {
  CheckName(firstNameFromProfile, validationFirstNameFromProfile);
  if (btnsValid) {
    btnok();
  }
});

lastNameFromProfile.addEventListener("input", () => {
  CheckLastName(lastNameFromProfile, validationLastNameFromProfile);
  if (btnsValid) {
    lastNamebtnValid = true;
    btnok();
  }
});

const CheckName = (theName, err) => {
  name = validName(theName.value);

  if (!name.length) {
    err.classList.add("d-none");
    btnok();
    return (firstNamebtnValid = true);

    /* the button can work */
  } else {
    /* error */
    err.innerHTML = name;
    firstNamebtnValid = false;
    profileBotton.disabled = true;
    return;
  }
};
const CheckLastName = (theName, err) => {
  name = validName(theName.value);

  if (!name.length) {
    err.classList.add("d-none");
    lastNamebtnValid = true;
    btnok();
    return;

    /* the button can work */
  } else {
    /* error */
    err.innerHTML = name;
    lastNamebtnValid = false;
    profileBotton.disabled = true;
    err.classList.remove("d-none");
    return;
  }
};
const checkEmail = (theEmail, err) => {
  email1 = validEmail(theEmail.value);

  if (!email1.length) {
    err.classList.add("d-none");
    btnok();
    emailbtnValid = true;
    return;

    /* the button can work */
  } else {
    /* error */
    err.innerHTML = email1;
    emailbtnValid = false;
    profileBotton.disabled = true;
    err.classList.remove("d-none");
    return;
  }
};

/* check if the Passwpord isgood */
PasswordFromProfile.addEventListener("input", () => {
  checkPassword(PasswordFromProfile, validationPasswordFromProfile);
  if (btnsValid) {
    passworsbtnValid = true;
    btnok();
  }
  if (RePasswordFromProfile.value === PasswordFromProfile.value) {
    rePassworsbtnValid = true;
    validationRePasswordFromPassword.classList.add("d-none");
    btnok();
  } else {
    validationRePasswordFromPassword.innerHTML = "Un correct Password";
    validationRePasswordFromPassword.classList.add("d-block");
    validationRePasswordFromPassword.classList.remove("d-none");
    rePassworsbtnValid = false;
    profileBotton.disabled = true;
  }
});
RePasswordFromProfile.addEventListener("input", () => {
  checkPassword(PasswordFromProfile, validationPasswordFromProfile);
  if (btnsValid) {
    passworsbtnValid = true;
    btnok();
  }
  if (RePasswordFromProfile.value === PasswordFromProfile.value) {
    rePassworsbtnValid = true;
    validationRePasswordFromPassword.classList.add("d-none");
    btnok();
  } else {
    validationRePasswordFromPassword.innerHTML = "Un correct Password";
    validationRePasswordFromPassword.classList.add("d-block");
    validationRePasswordFromPassword.classList.remove("d-none");
    rePassworsbtnValid = false;
    profileBotton.disabled = true;
  }
});

const checkPassword = (thePassword, err) => {
  password1 = validPassword(thePassword.value);

  if (!password1.length) {
    err.classList.add("d-none");
    passworsbtnValid = true;
    if (RePasswordFromProfile.value === PasswordFromProfile.value) {
      rePassworsbtnValid = true;
      validationRePasswordFromPassword.classList.add("d-none");
      btnok();
    } else {
      profileBotton.disabled = true;
      rePassworsbtnValid = false;
      validationRePasswordFromPassword.innerHTML = "Un correct Password";
      validationRePasswordFromPassword.classList.add("d-block");
      validationRePasswordFromPassword.classList.remove("d-none");
    }
    return;

    /* the button can work */
  } else {
    /* error */
    err.classList.remove("d-none");
    err.innerHTML = password1;
    return (passworsbtnValid = false);
  }
};
/* ccheck if rePassword id similar to Password */
RePasswordFromProfile.addEventListener("input", () => {});

const btnok = () => {
  if (
    rePassworsbtnValid &&
    passworsbtnValid &&
    emailbtnValid &&
    lastNamebtnValid &&
    firstNamebtnValid
  ) {
    profileBotton.disabled = false;
  }
};

let isAdmin;
profileBotton.addEventListener(
  "click",
  () => {
    if (AdminCheckBoxFromProfile.checked) {
      isAdmin = true;
    } else {
      isAdmin = false;
    }
    let users = localStorage.getItem("users");
    let existUser = localStorage.getItem("existUser");

    if (users && existUser) {
      //we have users

      users = JSON.parse(users); // convert from string to array of objects
      existUser = JSON.parse(existUser);
      console.log("userEmail");
      let userEmail = users.find(
        (item) => item.email === emailFromProfile.value
      );
      console.log("userEmail", userEmail);
      console.log("userEmail???????????", userEmail);
      let user = users.find((item) => item.id === existUser.id);

      if (userEmail && user.id !== userEmail.id) {
        console.log(
          "userEmail",
          userEmail.id,
          "user.id",
          user.id,
          "userEmail.id",
          userEmail.id
        );
        //the email already token
        /* showToast("The email already taken", false); */
        return;
      }
      if (user) {
        user.firstName = existUser.firstName = firstNameFromProfile.value;
        user.email = existUser.email = emailFromProfile.value;
        user.password = PasswordFromProfile.value;
        user.id = existUser.id = existUser.id;
        user.lastName = existUser.lastName = lastNameFromProfile.value;
        user.isAdmin = existUser.isAdmin = isAdmin;
        user.state = existUser.state = stateFromProfile.value;
        user.country = existUser.country = countryFromProfile.value;
        user.city = existUser.city = cityFromProfile.value;
        user.street = existUser.street = streetFromProfile.value;
        user.houseNumber = existUser.houseNumber = houseFromProfile.value;
        user.zipCode = existUser.zipCode = zipFromProfile.value;
        user.phone = existUser.phone = numberFromProfile.value;

        console.log("user", user.name);
        console.log("user", user);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("existUser", JSON.stringify(existUser));
        document.getElementById("goodjob").classList.remove("d-none");
      }
    }
    setTimeout(() => {
      location.reload();
    }, 3000);
  },
  { once: true }
);
