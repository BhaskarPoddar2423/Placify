const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const passport = require("passport");

const User = require("../models/User");
const authMiddleware = require("../middleware/auth");
const sendEmail = require("../utils/sendEmail");

const router = express.Router();

function generateCompanyEmail(name) {
  const formattedName = name.toLowerCase().replace(/\s+/g, ".");
  return `${formattedName}@placify.com`;
}

router.post("/signup", async (req, res) => {
  try {
    const { name, companyName, email, password, role, rbAccess } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ msg: "All required fields must be filled" });
    }

    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email already registered" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    let companyEmail = generateCompanyEmail(name);
    let counter = 1;
    while (await User.findOne({ companyEmail })) {
      companyEmail = generateCompanyEmail(name) + counter;
      counter++;
    }

    const newUser = await User.create({
      name,
      companyName,
      email,
      companyEmail,
      passwordHash,
      role,
      rbAccess,
    });

    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    try {
      await sendEmail(
        email,
        "Welcome to Placify",
        `Hello ${name},\n\nYour account has been created successfully.\n\nYour login credentials:\nCompany Email: ${companyEmail}\nPassword: ${password}\n\nPlease keep them safe.\n\n- Placify Team`
      );
    } catch (emailError) {
      console.error("Welcome email failed to send:", emailError.message);
    }

    res.json({
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        personalEmail: newUser.email,
        companyEmail: newUser.companyEmail,
        role: newUser.role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ msg: "Missing credentials" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

router.get("/me", authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

router.post("/forgot-password", async (req, res) => {
  const { personalEmail } = req.body;

  try {
    const user = await User.findOne({ email: personalEmail });
    if (!user) return res.status(404).json({ msg: "User not found" });

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // 15 min
    await user.save();

    const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

    await sendEmail(
      personalEmail,
      "Password Reset Request",
      `You requested to reset your password. Click the link below:\n\n${resetUrl}\n\nThis link expires in 15 minutes.`
    );

    res.json({ msg: "Password reset link sent to email" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ msg: "Invalid or expired token" });

    user.passwordHash = await bcrypt.hash(password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.json({ msg: "Password reset successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
    res.redirect(`${process.env.FRONTEND_ORIGIN}/dashboard?token=${token}`);
  }
);

module.exports = router;
