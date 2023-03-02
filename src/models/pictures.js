class Pictures {
  id;
  imgUrl;
  alt;
  credit;
  price;
  description;
  date;
  constructor(id, imgUrl, alt, credit, price, description, date) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.alt = alt;
    this.credit = credit;
    this.price = price;
    this.description = description;
    this.date = date;
  }
}
export default Pictures;
