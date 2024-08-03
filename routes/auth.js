const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// SIGN UP

router.post("/register", async (req, res) => {
  try {
    const {email_id, username, password} = req.body;
    const hashpassword = bcrypt.hashSync(password);
    const user = new User({email_id, username, password: hashpassword });
    await user.save().then(() => res.status(200).json({message:"Sign Up Successful"}));
  } catch (error) {
    res.status(400).json({ message: "*User Already Exists"});
  }
});

//Login IN

router.post("/login", async (req, res) => {
  try {
      const user = await User.findOne({email_id: req.body.email_id});
      if (!user) {
        res.status(400).json({ message: "PLEASE SIGN UP FIRST" });
      }

      const isPasswordCorrect= bcrypt.compareSync(req.body.password, user.password);
      if (!isPasswordCorrect) {
        res.status(400).json({ message: "*PASSWORD ERROR"});
      };
      const {password, ...others } = user._doc;
      res.status(200).json({ others });
    } catch (error) {
      res.status(400).json({ message: "*User Already Exists"});
    }
  });

module.exports = router;