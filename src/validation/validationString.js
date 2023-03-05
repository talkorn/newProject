import validateFunction from "./validate.js";
let reg;
const validString = (NumValue) => {
  reg = new RegExp("[a-zA-Z0-9\\s]+(\\,)?", "gi");
  return validateFunction(reg, NumValue, 0, 255).map(
    (err) => `the number is ${err}`
  );
};
export default validString;
