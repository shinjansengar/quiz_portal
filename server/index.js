const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/routes");
const db = require("./config");

const app = express();

async function connect() {
  try {
    await mongoose.connect(db.url, { useNewUrlParser: true });
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
}

connect();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use("/api", routes);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
