const UserModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
var mongoose = require("mongoose");

//create token structure
const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "24h" });
};

//login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await UserModel.login(email, password);

    //create token
    const token = createToken(user._id);
    const _id = user._id;
    const role = user.role;
    // console.log( _id, email, token, role);
    res.status(200).json({ 
      code: 200,
      msg: 'login successful',
      info: {
        id: _id,
        email: email,
        token: token,
        role: role
      }
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

//signup user
const signUpUser = async (req, res) => {
  const { email, password } = req.body;
  console.log('req.body', req.body);

  try {
    const user = await UserModel.signup( email, password);
    // console.log(user);
    //create token
    const token = createToken(user._id);
    console.log(token);

    res.status(200).json({
      code: 200,
      msg: 'signup successful',
      info: {
        id: user._id,
        email: user.email,
        role: user.role
      }
     });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signUpUser
};
