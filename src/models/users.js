class User {
  id;
  firstName;
  lastName;
  email;
  password;
  isAdmin;
  state;
  country;
  city;
  street;
  houseNumber;
  zipCode;
  phone;
  constructor(
    id,
    firstName,
    lastName,
    email,
    password,
    isAdmin,
    state,
    country,
    city,
    street,
    houseNumber,
    zipCode,
    phone
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
    this.state = state;
    this.country = country;
    this.city = city;
    this.street = street;
    this.houseNumber = houseNumber;
    this.zipCode = zipCode;
    this.phone = phone;
  }
}
export default User;
