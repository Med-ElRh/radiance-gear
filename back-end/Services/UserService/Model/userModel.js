const users = require("../../../Config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");

class UserModel {
  // sign up new user
  async signup(userInfo) {
    try {
      const { fname, lname, email, password, city, phone } = userInfo;

      const findUser = await users.findOne({ email: email });

      if (findUser) {
      }
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = UserModel;
