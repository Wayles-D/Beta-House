const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const users = require("../data/users");
const validator = require("validator");

router.post("/signup", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    termsAccepted,
  } = req.body;
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    res.status(400).json({ message: "All fields are required" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }
  if (!termsAccepted) {
    return res.status(400).json({
      message: "You must accept terms of service and privacy policies",
    });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }
  res.json({ message: "Validation passed, ready to hash password" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({message: 'Email and password are required'});
  }

  //find user
  const user = users.find(singleUser => singleUser.email === email);
  if(!user) {
    return res.status(400).json({message: 'User not found'});
  }

  //compare passwords
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({message: 'Invalid password'})
  }

  //upon success
  res.json({message: 'Login Successful', user: {firstName: user.firstName, lastName: user.lastName, email: user.email}})
});


module.exports = router;
