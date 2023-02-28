import Pictures from "../models/pictures.js";
let nextUserId = 1;
let id = 1;
const createData = () => {
  let picturesArr = [
    new Pictures(
      id++,
      "./assets/imgs/pic1.jpeg",
      `A beautiful waterfall in north of Israel`,
      "Photographed  by: Korn Family",
      5000,
      "kngkldfmldmvlknbk dnsdkjnc jnksdnc sjfnsklnlksnfkjebf"
    ),
    new Pictures(
      id++,
      "./assets/imgs/pic2.jpeg",
      `The Church of the Transfiguration located on Mount Tabor in Israel.`,
      "Photographed  by: Korn Family",
      3450,
      "dncjkdsb jhfjhvjh wbdahdb hvdhqjvd"
    ),

    new Pictures(
      id++,
      "./assets/imgs/pic3.jpeg",
      `A View Of Northern Israel From Mount Tabor`,
      "Photographed  by: Korn Family",
      1900,
      "kjbdjksd"
    ),
    new Pictures(
      id++,
      "./assets/imgs/pic4.jpeg",
      `A magnifique day in Les Arcs France`,
      "Photographed  by: Korn Family",
      7300,
      "ausbcjsabcjhsac"
    ),
    new Pictures(
      id++,
      "./assets/imgs/pic5.jpeg",
      `Falling snow in the alps`,
      "Photographed  by: Korn Family",
      7800,
      "jkbchjbsc"
    ),
    new Pictures(
      id++,
      " ./assets/imgs/pic6.jpeg",
      `Boat selling in the river`,
      "Photographed  by: Korn Family",
      3500,
      "jksbckjsdbcjks"
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
