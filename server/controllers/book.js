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

//create reference to the model (dbschema )
let Book = require("../models/book");

module.exports.displayBookList = (req, res, next) => {
  Book.find((err, bookList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(bookList);

      res.render("book/list", { title: "Books", BookList: bookList });
      //render book.ejs and pass title and Booklist variable we are passing bookList object to BookList property
    }
  });
};

module.exports.addpage = (req, res, next) => {
  res.render("book/add", {
    title: "Add Contact",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.addprocesspage = (req, res, next) => {
  let newBook = Book({
    name: req.body.name,
    contact: req.body.contact,
    email: req.body.email,
  });
  Book.create(newBook, (err, Book) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the book list
      res.redirect("/business-contact");
    }
  });
};

module.exports.displayeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  Book.findById(id, (err, booktoedit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("book/edit", { title: "Edit Contact", book: booktoedit });
    }
  });
};

module.exports.processingeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  let updatebook = Book({
    _id: id,
    name: req.body.name,
    contact: req.body.contact,
    email: req.body.email,
  });
  Book.updateOne({ _id: id }, updatebook, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the book list
      res.redirect("/business-contact");
    }
  });
};

module.exports.deletepage = (req, res, next) => {
  let id = req.params.id;
  Book.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh book list
      res.redirect("/business-contact");
    }
  });
};
