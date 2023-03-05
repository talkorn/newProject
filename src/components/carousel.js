let picturesArr;
let carouselDiv;

const initialPicturesCarousel = (picturesArrFromHomePage) => {
  picturesArr = picturesArrFromHomePage;
  carouselDiv = document.getElementById("home-page-pictures-carousel");
  console.log(
    "🚀 ~ file: carousel.js:7 ~ initialPicturesCarousel ~ carouselDiv:",
    carouselDiv.value
  );
  createCarousel();
};

const createItem = (id, imgUrl, alt, credit, price) => {
  if (firstId == id) {
    return ` <div id ="${id}"class="carousel-item active" data-bs-interval="2000"><h3>${alt}</h3>
                                    <img src="${imgUrl}" class="imgs w-100" alt="${alt}">${credit} 
      </div>
                  
                                `;
  } else {
    return `

                                <div id ="${id}"class="carousel-item " data-bs-interval="2000"><h3>${alt}</h3>
                                    <img  src="${imgUrl}" class="imgs w-100" alt="${alt}"> ${credit}
                                </div>

`;
  }
};
let firstId;
const checkFirstId = () => {
  if (!picturesArr) {
    return;
  }
  for (let picture of picturesArr) {
    if (picture) {
      firstId = picture.id;
      return;
    }
  }
};

const createCarousel = () => {
  let innerCard = "";
  /* picturesArr = JSON.parse(localStorage.getItem("PICS")); */
  checkFirstId();
  if (!picturesArr) {
    return;
  }
  for (let pictures of picturesArr) {
    innerCard += createItem(
      pictures.id,
      pictures.imgUrl,
      pictures.alt,
      pictures.credit,
      pictures.price
    );
    carouselDiv.innerHTML = innerCard;
  }
};

export default initialPicturesCarousel;
