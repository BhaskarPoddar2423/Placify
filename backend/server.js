const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
require("./config/passport");


const app = express();

app.use(
  cors({ origin: process.env.FRONTEND_ORIGIN || "http://localhost:3000" })
);
app.use(express.json());
app.use(bodyParser.json());

app.use(
  session({
    secret: "placify_secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", authRoutes);

connectDB(process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
