import User from "../mongodb/models/user.js";
import jwt from "jsonwebtoken";

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
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, avatar } = req.body;
    if (await User.findOne({ email }))
      return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ firstName, lastName, email, password, avatar });
    console.log(newUser);

    await newUser.save();
    res.status(201).json({ message: "User registered" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Server error" });
  }
};

export { registerUser, loginUser };
