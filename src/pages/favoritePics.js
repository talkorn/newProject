let pictureFavoriteArr;
let cardsDiv;
/* the function will set the favoritePage after window.reload from local storage */
const initialfavorite = () => {
  cardsDiv = document.getElementById("favoriteDiv");
  cardsDiv.innerHTML = "your Favorite cart is empty";
  pictureFavoriteArr = localStorage.getItem("favorite");
  if (pictureFavoriteArr) {
    pictureFavoriteArr = JSON.parse(pictureFavoriteArr);
    createCards(pictureFavoriteArr);
  }
};
/* the function add a picture to favoritePage in case its not alerdy there */
const addtofavorite = (picture) => {
  if (!picture) {
    return;
  }
  console.log("here11111");
  let thisPicture = picture;
  console.log(
    "🚀 ~ file: favoritePics.js:7 ~ addtofavorite ~ thisPicture:",
    thisPicture
  );
  let checkifExist = 0;
  cardsDiv = document.getElementById("favoriteDiv");
  if (!pictureFavoriteArr) {
    console.log("here");
    pictureFavoriteArr = [thisPicture];
  } else {
    for (let pics of pictureFavoriteArr) {
      if (thisPicture.id == pics.id) {
        checkifExist = 1;
        console.log("thisPicture.id", thisPicture.id);
        console.log("pics.id", pics.id);
      } else {
      }
    }
    if (checkifExist == 0) {
      pictureFavoriteArr = [...pictureFavoriteArr, thisPicture];
    }
  }
  createCards(pictureFavoriteArr);
  localStorage.setItem("favorite", JSON.stringify(pictureFavoriteArr));
};
/* the function create card html  */
const createItem = (id, imgUrl, alt, credit, price) => {
  return `
  <div class="card" style="width: 18rem;"id="card${id}">
  <img src="${imgUrl}" class="card-img-top" alt="${alt}">
  <h5 class="card-title">${alt}</h5>
  <div class="card-body">
    <p class="card-text">${credit}.</p>
      <button type="button" class="btn btn-info"><i class="bi bi-currency-dollar"></i> buy now</button>
      <button type="button" class="btn btn-info" id=removeButton-${id}>remove from favorite</button>
  </div>
</div>  
    `;
};

const getIdFromClick = (ev) => {
  let idFromId = ev.target.id.split("-"); // split the id to array
  if (!ev.target.id) {
    /*
        if press on icon then there is no id
        then we need to take the id of the parent which is btn
      */
    idFromId = ev.target.parentElement.id.split("-");
  }
  return idFromId[1];
};
const deletFavorite = (ev) => {
  let id = getIdFromClick(ev);
  id = +id;
  console.log(id);
  pictureFavoriteArr = pictureFavoriteArr.filter((item) => item.id !== id);
  console.log(pictureFavoriteArr);
  localStorage.setItem("favorite", JSON.stringify(pictureFavoriteArr));
  createCards(pictureFavoriteArr);
  if (!pictureFavoriteArr.length) {
    cardsDiv.innerHTML = "your Favorite cart is empty";
  }
};
const createBtnEventListener = () => {
  let btns = document.querySelectorAll(`[id^='${"removeButton"}-']`);
  //add events to new btns
  console.log(btns);
  for (let btn of btns) {
    btn.addEventListener("click", (ev) => {
      deletFavorite(ev);
    });
  }
};
const clearEventListeners = (idKeyword, handleFunction) => {
  //get all old btns
  let btnsBefore = document.querySelectorAll(`[id^='${idKeyword}-']`);
  //remove old events
  for (let btn of btnsBefore) {
    btn.removeEventListener("click", handleFunction);
  }
};

let card;
/* the function puts rhe picture detailes in the html */
const createCards = (pictures) => {
  let innerCard = "";
  pictureFavoriteArr = pictures;
  if (!pictureFavoriteArr) {
    return;
  }
  for (let picture of pictureFavoriteArr) {
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
  createBtnEventListener();
};
export { addtofavorite, initialfavorite };
