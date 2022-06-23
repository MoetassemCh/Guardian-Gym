const dbconnect = require("./connection.js");
const mongoose = require("mongoose");
const usersModel = require("./GYMModules/usersSchema");
const CategoryModel = require("./GYMModules/CategoriesShcema");
const ProductsModel = require("./GYMModules/ProductsSchema");

const showErrors = require("./showErrors");

// const user1 = new usersModel({
//   userinfo: {
//     firstName: "ali",
//     lastName: "chebbo",
//     email: "ali@gmail.com",
//     password: "password",
//     phoneNumber: "12-1234-4321",
//   },
//   address: {
//     country: "Lebanon",
//     city: "barja",
//     state: "mount lebanon",
//     street: "naaora",
//   },
// });

// const user2 = new usersModel({
//   userinfo:{
//   firstName: "moe",
//   lastName: "chebbo",
//   email: "moe@gmail.com",
//   password: "password",
//   phoneNumber: "12-1234-4321",
//   },
//   address: {
//     country: "Lebanon",
//     city: "barja",
//     state: "mount lebanon",
//     street: "naaora",
//   },
// isAdmin:"true"
// });

const exercise1 = new CategoryModel({
  categoryName: "6 pack",
  exercises: [
    {
      exercisesName: "lift",
      Steps: ["dasd", "dsa", "sad", "dsa", "esdasd"],
    },
    {
      exercisesName: "up",
      Steps: ["gdfdf", "wqewq"],
    },
  ],
});

const exercise2 = new CategoryModel({
  categoryName: "push up",
  exercises: [
    {
      exercisesName: "lift",
      Steps: ["dasd", "dsa", "sad", "dsa"],
    },
    {
      exercisesName: "up",
      Steps: ["gdfdf", "wqewq", "adsda"],
    },
  ],
});





const drop_collection = async () => {

  // await usersModel.collection.drop();
  await CategoryModel.collection.drop();
  
};

drop_collection().then(() => {
//   user1
//     .save()
//     .then((result) => {
//       console.log(" user 1 Added!");
//     })
//     .catch((error) => {
//       showErrors(error);
//     });

//   user2
//     .save()
//     .then((result) => {
//       console.log("user 2 Added!");
//     })
//     .catch((error) => {
//       showErrors(error);
//     });

  exercise1
    .save()
    .then((result) => {
      console.log("exercise1 Added!");
    },1000)
    .catch((error) => {
      showErrors(error);
    });

  exercise2
    .save()
    .then((result) => {
      console.log("exercise2 Added!");
    },1000)
    .catch((error) => {
      showErrors(error);
    });




});
