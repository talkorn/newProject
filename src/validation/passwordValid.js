import validateFunction from "./validate.js";
let reg;
const validPassword = (PasswordValue) => {
  reg = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{0,}$",
    "g"
  );
  return validateFunction(reg, PasswordValue, 3, 255).map(
    (err) => `the password is ${err}`
  );
};
export default validPassword;
