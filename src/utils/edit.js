import validateFunction from "../validation/validate.js";
let showEdit = document.getElementById("add-pic-page");
let homePage = document.getElementById("home-page");
let imgUrlFromEdit = document.getElementById("imgUrlFromAddPic");
let AltFromEdit = document.getElementById("AltFromAddPic");
let picCreditFromEdit = document.getElementById("picCreditFromAddPict");
let picPriceFromEdit = document.getElementById("picPriceFromAddPic");
let validImgUrlEdit = document.getElementById("validImgUrlAddPic");
let picDescrptionFromEdit = document.getElementById("picDescrptionFromAddPic");
let AddPicBotton = document.getElementById(" AddPicBotton");
let showPicEdit = document.getElementById("showPic");
let EditPicBotton = document.getElementById("EditPicBotton");
EditPicBotton.classList.remove("d-none");
let imgRegexFromComputer = new RegExp("(?:jpg|jpeg|gif|png)");
let imgRegex = new RegExp(
  "^((http|https)://)[-a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)$"
);
EditPicBotton.disabled = false;
let btnok = true;
let picturesArr;
let id;
let picture;
const startEdit = (idEdit, arrPics) => {
  console.log("here");
  showEdit.classList.remove("d-none");
  showEdit.classList.add("d-block");
  homePage.classList.remove("d-block");
  homePage.classList.add("d-none");
  AddPicBotton.classList.add("d-none");
  EditPicBotton.classList.remove("d-none");
  document.getElementById("addPicTytle").classList.add("d-none");
  picturesArr = arrPics;
  /* picturesArr = localStorage.getItem("pics");
  picturesArr = JSON.parse(picturesArr);
 */
  console.log("🚀 ~ file: edit.js:24 ~ startEdit ~ picturesArr:", picturesArr);
  id = +idEdit;
  console.log("🚀 ~ file: edit.js:26 ~ startEdit ~ id:", id);
  /*  var item = picturesArr.find((item) => item.id === 2); */
  picture = picturesArr.find((item) => item.id === +id);
  /*  picture = picturesArr.filter((item) => item.id === id); */
  /* picture = picture[0]; */
  console.log(picture);

  console.log(picture.id);

  fillTheCell();
};
const fillTheCell = () => {
  /*   showPicEdit.value = picture.imgUrl; */
  showPicEdit.innerHTML = `
    <img id="showPicFromAddPic" src="${picture.imgUrl}" style="width: 23vw;" class=" card-img-top" alt=""></img>`;
  imgUrlFromEdit.value = picture.imgUrl;
  AltFromEdit.value = picture.alt;
  picCreditFromEdit.value = picture.credit;
  picPriceFromEdit.value = picture.price;
  picDescrptionFromEdit.value = picture.description;
};
showEdit.addEventListener("input", () => {
  imgUrlFromEdit.addEventListener("input", () => {
    validInputAddPic();
  });
  isBtnOk();
});
const validInputAddPic = () => {
  let imgFromComputerValid = validateFunction(
    imgRegexFromComputer,
    imgUrlFromEdit.value,
    3,
    255
  );
  let imgValid = validateFunction(imgRegex, imgUrlFromEdit.value, 3, 255);
  console.log("imgFromComputerValid ", imgFromComputerValid);
  console.log("imgvalid", imgValid);
  if (imgValid.length && imgFromComputerValid.length) {
    validImgUrlEdit.classList.remove("d-none");
    validImgUrlEdit.classList.add("d-block");
    validImgUrlEdit.innerHTML = imgValid;
    btnok = false;
    console.log("🚀 ~ file: addPic.js:31 ~ validInputAddPic ~ btnok:", btnok);
    showPicEdit.innerHTML = `
    <img id="showPicFromAddPic" src="./assets/imgs/emptyPicture.jpg" style="width: 23vw;" class=" card-img-top" alt=""></img>`;

    /*  return (btnsValid = true); */
  } else {
    if (!imgValid.length || !imgFromComputerValid.length) {
      btnok = true;
      validImgUrlEdit.classList.add("d-none");
      showPicEdit.innerHTML = `
    <img id="showPicFromAddPic" src="${imgUrlFromEdit.value}" style="width: 23vw;" class=" card-img-top" alt=""></img>`;
    }
  }
};
const isBtnOk = () => {
  console.log("h111111111111111111111");
  if (btnok) {
    EditPicBotton.disabled = false;
    EditPicBotton.addEventListener("click", () => {
      picture.imgUrl = imgUrlFromEdit.value;
      picture.alt = AltFromEdit.value;
      picture.credit = picCreditFromEdit.value;
      picture.price = picPriceFromEdit.value;
      picture.description = picDescrptionFromEdit.value;
      console.log(picture);
      console.log(picturesArr);
      localStorage.setItem("pics", JSON.stringify(picturesArr));
      location.reload();
    });
  } else {
    EditPicBotton.disabled = true;
  }
};
/*  להמשיך מפה-מצאתי התא,עכשיו להעביר את התאים שלן לתטבלה*/
export default startEdit;
