const dbconnect =require("./connection.js")
const mongoose = require("mongoose");
const usersModel = require("./GYMModules/usersSchema");



const user1 = new usersModel({
  userinfo: [
    {
      firstName: "moetassem",
      lastName: "chebbo",
      email: "moetassem@gmail.com",
      password: "moe12",
      phoneNumber: "31312",
    },
  ],
  address: [
    {
      country: "Lebanon",
      city: "barja",
      state: "mount lebanon",
      street: "naaora",
    },
  ],
});

const user2 = new usersModel({
  userinfo: [
    {
      firstName: "ali",
      lastName: "chebbo",
      email: "ali@gmail.com",
      password: "moe12",
      phoneNumber: "31312",
    },
  ],
  address: [
    {
      country: "Lebanon",
      city: "barja",
      state: "mount lebanon",
      street: "naaora",
    },
  ],
  isAdmin:"true"
});





const drop_collection = async () => {
  await usersModel.collection.drop();
};

drop_collection().then(
  ()=>{
user1
  .save()
  .then((result) => {
    console.log(" user 1 Added!");
  })
  .catch((error) => {
    showErrors(error);
  });

  user2.save()
  .then((result) => {
    console.log("user 2 Added!");
    
  })
  .catch((error) => {
    showErrors(error); 
    
  });


})