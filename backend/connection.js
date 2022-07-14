const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const dbconnect = require("./test");
// const userRoute = require("./routes/userRoute");
const userRoute2 = require("./routes/userRoute2");
const ExerciseCategory=require("./routes/CategoriesRoute")
const ProductRouter = require("./routes/ProductsRoute");
const UploadRoute = require("./routes/uploadImg");
const path=require("path")
// const ProfileRouter = require("./routes/ProfileRoute");
const OrderRouter = require("./routes/orderRoute");
const AdminProfile = require("./routes/admin/AProfile");
const AdminProduct=require("./routes/admin/AProducts")
const OrderAdmin = require("./routes/admin/Aorder");
const morgan=require("morgan")
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: ".env" });
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());



app.use(
  express.urlencoded({
    extended: true,
  })
);


app.use(cookieParser());


const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // // useCreateIndex: true
  })
  .then(() => {
  console.log("MongoDB connection established.")
  app.listen(port, () => {
  console.log(`Server is runing on port:${port}`);
  })
}).catch((error) =>{ console.error("MongoDB connection failed:", error.message)
});





app.get("/", (req, res) => {
  console.log("user hit the resource");
});

app.get("/home", (req, res) => {
  res.render('home')
});

app.use("/ExerciseCategory", ExerciseCategory);

// app.use("/api", userRoute);

app.use("/api/users", userRoute2);
app.use("/api/upload", UploadRoute);
app.use('/Upload',express.static(path.join(__dirname,'/Upload')))

// app.use("/profile", ProfileRouter);

app.use("/products", ProductRouter);

app.use("/orders", OrderRouter);


app.use("/dashboard/profile", AdminProfile);

app.use("/dashboard/product", AdminProduct);

app.use("/dashboard/orders", OrderAdmin);



app.all("*", (req, res,next) => {
  res.status(404).send("<h4>resource not found</h4>");
});
