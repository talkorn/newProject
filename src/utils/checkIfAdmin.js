const checkIfAdmin = () => {
  let existUser = localStorage.getItem("existUser");
  if (existUser) {
    existUser = JSON.parse(existUser);
    if (existUser.isAdmin) {
      return true;
    } else {
      return false;
    }
  }
};
export default checkIfAdmin;
