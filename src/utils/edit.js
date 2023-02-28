let showEdit = document.getElementById("add-pic-page");
let homePage = document.getElementById("home-page");
let imgUrlFromEdit = document.getElementById("imgUrlFromAddPic");
let AltFromEdit = document.getElementById("AltFromAddPic");
let picCreditFromEdit = document.getElementById("picCreditFromAddPict");
let picPriceFromEdit = document.getElementById("picPriceFromAddPic");
let validImgUrlEdit = document.getElementById("validImgUrlAddPic");
let picDescrptionFromEdit = document.getElementById("picDescrptionFromAddPic");
let showPicEdit = document.getElementById("showPic");
let EditPicBotton = document.getElementById(" AddPicBotton");
let imgRegex = new RegExp(
  "^((http|https)://)[-a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)$"
);
let btnok = false;
let picturesArr;
let id;
let x;
const startEdit = (idEdit, arrPics) => {
  console.log("here");
  showEdit.classList.remove("d-none");
  showEdit.classList.add("d-block");
  homePage.classList.remove("d-block");
  homePage.classList.add("d-none");
  document.getElementById("addPicTytle").classList.add("d-none");
  picturesArr = arrPics;
  console.log("🚀 ~ file: edit.js:24 ~ startEdit ~ picturesArr:", picturesArr);
  id = +idEdit;
  console.log("🚀 ~ file: edit.js:26 ~ startEdit ~ id:", id);
  /*  var item = picturesArr.find((item) => item.id === 2); */
  x = picturesArr.filter((item) => item.id === id);
  console.log(x);
};
/*  להמשיך מפה-מצאתי התא,עכשיו להעביר את התאים שלן לתטבלה*/
export default startEdit;
