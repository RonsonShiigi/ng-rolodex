const Contact = require("./models/Contacts");
const User = require("./models/Users");

module.exports = function(req, res, next) {
  req.database = { Contact, User };

  console.log("hi", User);

  next();
};
