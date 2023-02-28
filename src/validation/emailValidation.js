import validateFunction from "./validate.js";
let reg;
const validEmail = (Emailvalue) => {
  reg = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$", "ig");
  return validateFunction(reg, Emailvalue, 3, 255).map(
    (err) => `email is ${err}`
  );
};
export default validEmail;
