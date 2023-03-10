import Pictures from "../models/pictures.js";
import validateFunction from "../validation/validate.js";
import checkIfAdmin from "../utils/checkIfAdmin.js";
import { pageChange } from "../routes/router.js";
import PAGES from "../models/pageModel.js";
/* import initialHomePage from "../pages/homePage.js";
let picDiv = document.getElementById("picDiv"); */
let addPicPageNav = document.getElementById("nav-add-pic-page");
/* let showPicFromAddPic = document.getElementById("showPicFromAddPic"); */
let imgUrlFromAddPic = document.getElementById("imgUrlFromAddPic");
let AltFromAddPic = document.getElementById("AltFromAddPic");
let picCreditFromAddPict = document.getElementById("picCreditFromAddPict");
let picPriceFromAddPic = document.getElementById("picPriceFromAddPic");
let validImgUrlAddPic = document.getElementById("validImgUrlAddPic");
let picDescrptionFromAddPic = document.getElementById(
  "picDescrptionFromAddPic"
);
let canceleButtonAddpicEdit = document.getElementById(
  "canceleButtonAddpicEdit"
);
let picturesArr;
let showPicEdit = document.getElementById("showPic");
let isAdmin = false;
let showPic = document.getElementById("showPic");
let AddPicBotton = document.getElementById(" AddPicBotton");
let imgRegex = new RegExp(
  "^((http|https)://)[-a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)$"
);
let editPicTytle = document.getElementById("editPicTytle");
let EditPicBotton = document.getElementById("EditPicBotton");
let showAddPic = document.getElementById("addPicTytle");
const d = new Date();
const y = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

const emptyAddPic = () => {
  AddPicBotton.classList.add("d-block");
  AddPicBotton.classList.remove("d-none");
  EditPicBotton.classList.add("d-none");
  editPicTytle.classList.add("d-none");
  showPicEdit.innerHTML = `
    <img id="showPicFromAddPic" src="./assets/imgs/emptyPicture.jpg" style="width: 23vw;" class=" card-img-top" alt=""></img>`;
  imgUrlFromAddPic.value = "";
  AltFromAddPic.value = "";
  picCreditFromAddPict.value = "";
  picPriceFromAddPic.value = "";
  picDescrptionFromAddPic.value = "";
};

let btnok = false;
/* window.addEventListener("load", () => {
   isAdmin = checkIfAdmin();
  
  showAddPic.classList.remove("d-none");
  if (!isAdmin) {
    addPicPageNav.classList.add("d-none"); 
  }
}); */
canceleButtonAddpicEdit.addEventListener("click", () => {
  pageChange(PAGES.HOME);
});
showPic.innerHTML = `
    <img id="showPicFromAddPic" src="./assets/imgs/emptyPicture.jpg" style="width: 23vw;" class=" card-img-top" alt=""></img>`;
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

AddPicBotton.addEventListener("click", () => {
  let nextId = localStorage.getItem("nextId");
  console.log("🚀 ~ file: addPic.js:98 ~ nextId:", nextId);
  nextId = +nextId;
  let newPic = new Pictures(
    nextId++,
    imgUrlFromAddPic.value,
    AltFromAddPic.value,
    picCreditFromAddPict.value,
    picPriceFromAddPic.value,
    picDescrptionFromAddPic.value,
    y
  );
  console.log(
    "🚀 ~ file: addPic.js:45 ~ window.addEventListener ~ picturesArr:",
    picturesArr
  );
  picturesArr = localStorage.getItem("pics");
  if (!picturesArr) {
    console.log("????????????", picturesArr);
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
export default emptyAddPic;
