import User from "../model/UserModel.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const loginUser = async () => {};

const signupUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw Error("All fields must be filled");
    }
    if (!validator.isEmail(email)) {
      throw Error("Email is not valid");
    }
    if (!validator.isStrongPassword(password)) {
      throw Error("Passwore not strong enough");
    }
    const exists = await User.findOne({ email });
    if (exists) {
      throw Error("Email already in use");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await User.create({ email, password: hash });
      res.status(200).json({ email, userId: user._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { loginUser, signupUser };
