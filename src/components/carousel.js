let picturesArr;
let carouselDiv;

const initialPicturesCarousel = (picturesArrFromHomePage) => {
  console.log("carousel");
  picturesArr = picturesArrFromHomePage;
  carouselDiv = document.getElementById("home-page-pictures-carousel");
  createCarousel();
};

const createItem = (id, imgUrl, alt, credit, price) => {
  if (firstId == id) {
    return ` <div id ="${id}"class="carousel-item active" data-bs-interval="2000"><h3>${alt}</h3>
                                    <img src="${imgUrl}" class=" w-100" alt="${alt}">${credit} 
      </div>
                  
                                `;
  } else {
    return `

                                <div id ="${id}"class="carousel-item " data-bs-interval="2000"><h3>${alt}</h3>
                                    <img src="${imgUrl}" class=" w-100" alt="${alt}"> ${credit}
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
  /* picturesArr = JSON.parse(localStorage.getItem("PICS")); */
  checkFirstId();
  if (!picturesArr) {
    return;
  }
  for (let pictures of picturesArr) {
    carouselDiv.innerHTML += createItem(
      pictures.id,
      pictures.imgUrl,
      pictures.alt,
      pictures.credit,
      pictures.price
    );
  }
};

export default initialPicturesCarousel;
