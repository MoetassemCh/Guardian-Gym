const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));



app.listen(port, () => {
  console.log(`Server is runing on port:${port}`);
});

app.get("/", (req, res) => {
  console.log("user hit the resource");

});

app.all("*", (req, res) => {
  res.status(404).send("<h4>resource not found</h4>");
});
