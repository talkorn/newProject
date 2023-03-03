import checkIfAdmin from "../utils/checkIfAdmin.js";
import initialHomePage from "../pages/homePage.js";
import startEdit from "../utils/edit.js";
let picturesArr;
let listDiv;
let adminBtns;
let isAdmin;
/* let searchArr = "";
let change; */
let originalPropertiesArr = JSON.parse(localStorage.getItem("pics"));
window.addEventListener("load", () => {
  document.getElementById("searchInput").addEventListener("input", (ev) => {
    let regex = new RegExp("^" + ev.target.value, "i");
    console.log(
      "🚀 ~ file: List.js:9 ~ document.getElementById ~ ev.target.value:",
      ev.target.value
    );

    picturesArr = originalPropertiesArr.filter((item) => {
      let reg = regex.test(item.alt);
      return reg;
    });
    listDiv.innerHTML = "";
    initialPicturesList(picturesArr);
    console.log(picturesArr);
  });
});

const initialPicturesList = (picturesArrFromHomePage) => {
  picturesArr = picturesArrFromHomePage;
  console.log(
    "🚀 ~ file: List.js:36 ~ initialPicturesList ~ picturesArr:",
    picturesArr
  );
  listDiv = document.getElementById("home-page-pictures-list");
  isAdmin = checkIfAdmin();
  createList();
};

const createItem = (id, imgUrl, alt, credit, price, date) => {
  adminBtns = ` <button type="button" class="btn btn-primary w-100" id="propertyListEditBtn-${id}">
                    <i class="bi bi-pen-fill"></i> Edit
                </button>
                <button type="button" class="btn btn-secondary w-100" id="propertyListDeleteBtn-${id}">
                    <i class="bi bi-x-circle-fill"></i> Delete
                </button> `;
  return `
  <li class="list-group-item">
        <div class="row">
            <div class="col-lg-2">
                <img src="${imgUrl}" class="img-fluid" type="image" alt="${alt}">
            </div>
            <div class="col-lg-8">
                <div class="card-body">
                    <h5 class="card-title">${alt}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Photografed by: ${credit}</h6>
                    <p class="card-text">Price: ${price}
                    <p class="card-text">Date: ${date}
                    </p>

                </div>
            </div>
            <div class="col-lg-1">
                <button type="button" class="btn btn-info w-100">
                    <i class="bi bi-currency-dollar"></i> Buy now
                </button>
                ${isAdmin ? adminBtns : ""}
                
            </div>
        </div>

    </li>

`;
};

const createList = () => {
  let innerList = "";
  /* picturesArr = JSON.parse(localStorage.getItem("PICS")); */
  if (!picturesArr) {
    return;
  }
  for (let picture of picturesArr) {
    innerList += createItem(
      picture.id,
      picture.imgUrl,
      picture.alt,
      picture.credit,
      picture.price,
      picture.date
    );
  }
  listDiv.innerHTML = innerList;

  createBtnEventListener("propertyListDeleteBtn", handleDeleteBtnClick);
  // add event listeners for edit btns
  createBtnEventListener("propertyListEditBtn", handleEditBtnClick);
};

//Creates event listener for the delete buttons
const createBtnEventListener = (idKeyword, handleFunction) => {
  let btns = document.querySelectorAll(`[id^='${idKeyword}-']`);
  //add events to new btns
  for (let btn of btns) {
    btn.addEventListener("click", handleFunction);
  }
};

const getIdFromClick = (ev) => {
  let idFromId = ev.target.id.split("-"); // split the id to array
  if (!ev.target.id) {
    /*
        if press on icon then there is no id
        then we need to take the id of the parent which is btn
      */
    idFromId = ev.target.parentElement.id.split("-");
    console.log(
      "🚀 ~ file: List.js:115 ~ getIdFromClick ~ idFromId:",
      idFromId
    );
  }
  return idFromId[1];
};
const handleDeleteBtnClick = (ev) => {
  let id = getIdFromClick(ev);
  id = +id;
  console.log(id);
  picturesArr = picturesArr.filter((item) => item.id !== id);
  console.log(
    "🚀 ~ file: List.js:121 ~ handleDeleteBtnClick ~ deleteProperty:",
    picturesArr
  );
  localStorage.setItem("pics", JSON.stringify(picturesArr));
  initialHomePage();
  location.reload();
};

const handleEditBtnClick = (ev) => {
  let id = getIdFromClick(ev);
  id = +id;
  console.log(id);
  startEdit(id, picturesArr);
};

const clearEventListeners = (idKeyword, handleFunction) => {
  //get all old btns
  let btnsBefore = document.querySelectorAll(`[id^='${idKeyword}-']`);
  //remove old events
  for (let btn of btnsBefore) {
    btn.removeEventListener("click", handleFunction);
  }
};

export default initialPicturesList;
