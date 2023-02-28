import Pictures from "../models/pictures.js";
import validateFunction from "../validation/validate.js";
import checkIfAdmin from "../utils/checkIfAdmin.js";
import initialHomePage from "../pages/homePage.js";
let picDiv = document.getElementById("picDiv");
let addPicPageNav = document.getElementById("nav-add-pic-page");
let showPicFromAddPic = document.getElementById("showPicFromAddPic");
let imgUrlFromAddPic = document.getElementById("imgUrlFromAddPic");
let AltFromAddPic = document.getElementById("AltFromAddPic");
let picCreditFromAddPict = document.getElementById("picCreditFromAddPict");
let picPriceFromAddPic = document.getElementById("picPriceFromAddPic");
let validImgUrlAddPic = document.getElementById("validImgUrlAddPic");
let picDescrptionFromAddPic = document.getElementById(
  "picDescrptionFromAddPic"
);
let isAdmin = false;
let showPic = document.getElementById("showPic");
let AddPicBotton = document.getElementById(" AddPicBotton");
let imgRegex = new RegExp(
  "^((http|https)://)[-a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)$"
);
let btnok = false;
window.addEventListener("load", () => {
  isAdmin = checkIfAdmin();
  console.log(
    "🚀 ~ file: addPic.js:25 ~ window.addEventListener ~ isAdmin:",
    isAdmin
  );
  if (!isAdmin) {
    addPicPageNav.classList.add("d-none");
  }
});
let picturesArr = localStorage.getItem("pics");
showPic.innerHTML = `
    <img id="showPicFromAddPic" src="./assets/imgs/emptyPicture.jpg" style="width: 23vw;" class=" card-img-top" alt=""></img>`;

/* ./assets/imgs/emptyPicture.jpg */
console.log("3");
document.getElementById("imgUrlFromAddPic").addEventListener("input", () => {
  console.log(imgUrlFromAddPic.value);
  validInputAddPic();
});
const validInputAddPic = () => {
  let imgValid = validateFunction(imgRegex, imgUrlFromAddPic.value, 3, 255);
  console.log("imgvalid", imgValid);
  if (imgValid.length) {
    validImgUrlAddPic.classList.remove("d-none");
    validImgUrlAddPic.classList.add("d-block");
    validImgUrlAddPic.innerHTML = imgValid;
    btnok = false;
    console.log("🚀 ~ file: addPic.js:31 ~ validInputAddPic ~ btnok:", btnok);
    showPic.innerHTML = `
    <img id="showPicFromAddPic" src="./assets/imgs/emptyPicture.jpg" style="width: 23vw;" class=" card-img-top" alt=""></img>`;

    /*  return (btnsValid = true); */
  } else {
    btnok = true;
    validImgUrlAddPic.classList.add("d-none");
    showPic.innerHTML = `
    <img id="showPicFromAddPic" src="${imgUrlFromAddPic.value}" style="width: 23vw;" class=" card-img-top" alt=""></img>`;
  }
  isBtnOk();
};

const isBtnOk = () => {
  if (btnok) {
    AddPicBotton.disabled = false;
  } else {
    AddPicBotton.disabled = true;
  }
};
let nextId = localStorage.getItem("nextId");
nextId = +nextId;
AddPicBotton.addEventListener("click", () => {
  let newPic = new Pictures(
    nextId++,
    imgUrlFromAddPic.value,
    AltFromAddPic.value,
    picCreditFromAddPict.value,
    picPriceFromAddPic.value,
    picDescrptionFromAddPic.value
  );

  if (!picturesArr) {
    picturesArr = newPic;
    localStorage.setItem("pics", JSON.stringify(picturesArr));
    localStorage.setItem("nextId", JSON.stringify(nextId));

    /*  location.reload(); */
  } else {
    console.log(newPic);
    console.log(picturesArr);
    picturesArr = JSON.parse(picturesArr);
    picturesArr = [...picturesArr, newPic];
    localStorage.setItem("pics", JSON.stringify(picturesArr));
    localStorage.setItem("nextId", JSON.stringify(nextId));

    location.reload();
  }
});