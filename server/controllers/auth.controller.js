import User from "../mongodb/models/user.js";
import jwt from "jsonwebtoken";

const verifyUser = async (req, res) => {
  const { token } = req.body;

  if (token) {
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      res.json({
        userId: decode.userId,
        tokenValid: true,
        message: "Token valid",
      });
    } catch (error) {
      return res
        .status(403)
        .json({ tokenValid: false, message: "Token invalid" });
    }
  } else {
    res.json({
      tokenValid: false,
      message: "No token provided.",
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ type: "email", message: "Invalid email" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res
        .status(400)
        .json({ type: "password", message: "Invalid password" });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    res.json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    console.log(req.file);

    const { filename } = req.file;
    if (await User.findOne({ email }))
      return res.status(400).json({ message: "User already exists" });

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      avatar: filename,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Server error" });
  }
};

export { verifyUser, registerUser, loginUser };
