const getUsers = (req, res) => {
  res.send("getUsers");
};
const loginHandle = (req, res) => {
  res.send("loginHandle");
};
const deleteUser = (req, res) => {
  res.send("deleteUser");
};

const updateUser = (req, res) => {
  res.send("updateUser");
};
const getParamUserid = (req, res) => {
  res.send("getParamUserid");
};

module.exports = {
  getUsers,
  loginHandle,
  deleteUser,
  updateUser,
  getParamUserid,
};
