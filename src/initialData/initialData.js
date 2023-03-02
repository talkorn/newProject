import Pictures from "../models/pictures.js";
let nextUserId = 1;
let id = 1;
const d = new Date();
const y = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

const createData = () => {
  let picturesArr = [
    new Pictures(
      id++,
      "./assets/imgs/pic1.jpeg",
      `A beautiful waterfall in north of Israel`,
      "Korn Family",
      5000,
      "A beautiful picture of a waterfall in Israel captures the natural wonder of the country's landscapes. The rushing water cascades down a series of rocks, creating a stunning display of movement and sound. The surrounding greenery and rock formations add to the breathtaking scene.",
      y
    ),
    new Pictures(
      id++,
      "./assets/imgs/pic2.jpeg",
      `The Church of the Transfiguration located on Mount Tabor in Israel.`,
      "Korn Family",
      3450,
      "The picture of the Church of Mount Tabor in Israel from a distance captures the grandeur of the structure set against the surrounding landscape. The church's towering dome and bell tower stand out prominently against the blue sky. The rolling hills in the distance create a picturesque backdrop",
      y
    ),

    new Pictures(
      id++,
      "./assets/imgs/pic3.jpeg",
      `A View Of Northern Israel From Mount Tabor`,
      "Korn Family",
      1900,
      "The picture from Mount Tabor in Israel offers a stunning panoramic view of the surrounding landscape. The vast greenery stretches out as far as the eye can see, with rolling hills and valleys in the distance. The sky is clear and blue, providing a beautiful contrast to the lush scenery.",
      y
    ),
    new Pictures(
      id++,
      "./assets/imgs/pic4.jpeg",
      `A magnifique day in Les Arcs France`,
      "Korn Family",
      7300,
      "The picture of a snow-covered mountain in France captures the pristine beauty of winter landscapes. The mountain is blanketed in a thick layer of snow, with only a few trees peeking through. The clear blue sky provides a stunning contrast to the pure white snow.",
      y
    ),
    new Pictures(
      id++,
      "./assets/imgs/pic5.jpeg",
      `Falling snow in the alps`,
      "Korn Family",
      7800,
      "The picture of snow falling at night is a mesmerizing scene. The falling snow creates a sense of motion and depth, with the darkness of the night sky adding to the atmosphere. The peaceful silence of the scene is both calming and enchanting",
      y
    ),
    new Pictures(
      id++,
      " ./assets/imgs/pic6.jpeg",
      `Boat selling in the river`,
      "Korn Family",
      3500,
      "The picture of a big river with a boat captures the tranquil beauty of nature. The vast expanse of the river stretches out before us, with the boat providing a sense of scale and perspective. The calm waters and lush greenery along the banks create a serene atmosphere.",
      y
    ),
  ];
  return picturesArr;
};
const putInitialDataInStorage = () => {
  let pictures = localStorage.getItem("pics");
  if (pictures) {
    return;
  }
  localStorage.setItem("pics", JSON.stringify(createData()));
  localStorage.setItem("nextId", id + "");
  localStorage.setItem("nextUserId", nextUserId + "");
};

putInitialDataInStorage();
