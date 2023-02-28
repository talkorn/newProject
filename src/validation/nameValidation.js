import validateFunction from "./validate.js";
let reg;
const validName = (Namevalue) => {
  reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");
  return validateFunction(reg, Namevalue, 3, 255).map(
    (err) => `name is ${err}`
  );
};
export default validName;
