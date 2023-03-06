let pictureFavoriteArr;
let cardsDiv;
/* the function will set the favoritePage after window.reload from local storage */
const initialfavorite = () => {
  pictureFavoriteArr = localStorage.getItem("favorite");
  if (pictureFavoriteArr) {
    pictureFavoriteArr = JSON.parse(pictureFavoriteArr);
    cardsDiv = document.getElementById("favoriteDiv");
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
  </div>
</div>  
    `;
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
};
export { addtofavorite, initialfavorite };
