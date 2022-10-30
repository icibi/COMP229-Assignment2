/*-------------------------------------
            Assingment 2
        Irin Cibi - 301248509
COMP229 - Web Application Development
          29 October, 2022
--------------------------------------*/

//Used some codes from Week4.zip from eCentennial

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let bookModel = mongoose.Schema(
  {
    name: String,
    contact: Number,
    email: String,
  },

  {
    collection: "employees",
  }
);

//booksmodel to create new book more powerful than just class
module.exports = mongoose.model("Book", bookModel);
