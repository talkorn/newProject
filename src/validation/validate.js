const validateFunction = (regex, value, min, max) => {
  let validArr = [];
  if (value.length < min) {
    validArr = [...validArr, "its too short"];
  }
  if (value.length > max) {
    validArr = [...validArr, "its too long"];
  }
  if (!regex.test(value)) {
    validArr = [...validArr, "Invalid"];
  }
  return validArr;
};
export default validateFunction;
