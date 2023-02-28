class Pictures {
  id;
  imgUrl;
  alt;
  credit;
  price;
  description;
  constructor(id, imgUrl, alt, credit, price, description) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.alt = alt;
    this.credit = credit;
    this.price = price;
    this.description = description;
  }
}
export default Pictures;
