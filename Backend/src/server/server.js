const express = require("express");
const sequelize = require("../config/database.js");
const routes = require("../routes/route.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.log("Error connection", error.message);
  }
})();

app.use(routes);

app.listen(8080, () => {
  console.log("Running at http://localhost:8080");
});
