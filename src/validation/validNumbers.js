import validateFunction from "./validate.js";
let reg;
const validNumbers = (NumValue) => {
  reg = new RegExp("^[0-9]+$", "gi");
  return validateFunction(reg, NumValue, 0, 255).map(
    (err) => `the number is ${err}`
  );
};
export default validNumbers;
