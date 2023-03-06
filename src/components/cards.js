import checkIfAdmin from "../utils/checkIfAdmin.js";
import initialHomePage from "../pages/homePage.js";
import startEdit from "../utils/edit.js";
import { addtofavorite } from "../pages/favoritePics.js";
let picturesArr;
let cardsDiv;
let popupCardDiv;
let adminBtns;
let isAdmin;
let btnDeleteBtn;
let btnEditeBtn;
let btnIdChange;
const initialPicturesCards = (picturesArrFromHomePage) => {
  console.log("cards");
  picturesArr = picturesArrFromHomePage;
  cardsDiv = document.getElementById("home-page-pictures-cards");
  isAdmin = checkIfAdmin();
  createCards();
  popupCardDiv = document.getElementById("cardpopup");
};

const createItem = (id, imgUrl, alt, credit, price) => {
  return `
  <div class="card" style="width: 18rem;"id="card${id}">
  <img src="${imgUrl}" class="card-img-top" alt="${alt}">
  <h5 class="card-title">${alt}</h5>
  <div class="card-body">
    <p class="card-text">${credit}.</p>
  </div>
</div>  
    `;
};
let card;

const createCards = () => {
  let innerCard = "";
  if (!picturesArr) {
    return;
  }
  for (let picture of picturesArr) {
    innerCard += createItem(
      picture.id,
      picture.imgUrl,
      picture.alt,
      picture.credit,
      picture.price,
      picture.description,
      picture.date
    );
    cardsDiv.innerHTML = innerCard;
  }

  createpopUp();
};
const createpopUp = () => {
  for (let picture of picturesArr) {
    card = `card${picture.id}`;

    document.getElementById(card).addEventListener("click", nowICreatePopUP);
    function nowICreatePopUP() {
      btnIdChange = picture.id;
      /* btnDeleteBtn = `picsCardsEditBtn-${picture.id}`; */

      const popup = () => {
        adminBtns = `
        <div class="d-grid gap-2 col-6 mx-auto">
 <button type="button" class="btn btn-primary  " id="picsCardsEditBtn-${picture.id}">
                    <i class="bi bi-pen-fill"></i> Edit
                </button>
                <button type="button" class="btn btn-secondary " id="picsCardsDeleteBtn-${picture.id}">
                    <i class="bi bi-x-circle-fill"></i> Delete
                </button> </div>`;
        cardsDiv.classList.add("d-none");
        popupCardDiv.classList.remove("d-none");
        popupCardDiv.innerHTML = `
<div class="card " style="width: 40rem;">
  <img  src="${picture.imgUrl}" class="card-img-top" alt="${picture.alt}">
  <div class="card-body">
    <h5 class="card-title">${picture.alt}</h5>
    <p class="card-text">${picture.credit}</p>
    <p class="card-text">${picture.price}</p>
       <p class="card-text">Date: ${picture.date}
    <p class="card-text">${picture.description}</p>
    <div class="d-grid gap-2 col-6 mx-auto m-2">
  
 <button type="button" class="btn btn-info"><i class="bi bi-currency-dollar"></i> buy now</button>
    <button  id="addToFavoriteBtn-${picture.id}"
     type="button" class="btn btn-danger"> <i class="bi bi-cart"></i>  Add to Favorite</button>
   
  <a href="#" class="btn btn-dark" id="popupClose"><i class="bi bi-x-circle-fill"></i> close</a>
  </div>
    <div class="flex-direction: column">

    
      ${isAdmin ? adminBtns : ""}`;
        let y = `picsCardsEditBtn-${picture.id}`;
        let x = `picsCardsDeleteBtn-${picture.id}`;
        let z = `addToFavoriteBtn-${picture.id}`;
        let btnAddFavoriteId = document.getElementById(z);
        btnDeleteBtn = document.getElementById(x);
        btnEditeBtn = document.getElementById(y);
        console.log(
          "🚀 ~ file: cards.js:57 ~ document.getElementById ~ btnDeleteBtn:",
          btnDeleteBtn
        );
        btnAddFavoriteId.addEventListener("click", () => {
          console.log("hrerererer");
          addtofavorite(picture);
          cardsDiv.classList.remove("d-none");
          popupCardDiv.classList.add("d-none");
        });
        return;
      };
      popup();
      document.getElementById("popupClose").addEventListener(
        "click",
        () => {
          cardsDiv.classList.remove("d-none");
          popupCardDiv.classList.add("d-none");
          /* when i close the popup it ends the edit event */
          btnEditeBtn.removeEventListener("click", editPics);
        },
        { once: true }
      );

      /*  btnDeleteBtn = document.getElementById(`picsCardsEditBtn-${picture.id}`); */
      btnEditeBtn.addEventListener("click", editPics);
      function editPics() {
        startEdit(picture.id, picturesArr);
      }
      if (btnDeleteBtn !== null) {
        console.log(btnDeleteBtn);
        btnDeleteBtn.addEventListener("click", () => {
          let id = picture.id;
          console.log(picturesArr);
          picturesArr = picturesArr.filter((item) => item.id !== id);
          console.log(picturesArr);
          localStorage.setItem("pics", JSON.stringify(picturesArr));
          /* initialPicturesCards(); */
          initialHomePage();
          cardsDiv.classList.remove("d-none");
          popupCardDiv.classList.add("d-none");
          location.reload();
        });
        /* remove event createpopup */
        document
          .getElementById(card)
          .removeEventListener("click", nowICreatePopUP);
      }
    }
  }
};

export default initialPicturesCards;
/*const deleteProperty = (id) => {
  id = +id; //convert string to number
  originalPropertiesArr = originalPropertiesArr.filter(
    (item) => item.id !== id
  ); */
