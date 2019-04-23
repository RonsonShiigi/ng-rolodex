const Contact = require("./models/Contacts");

module.exports = function(req, res, next) {
  req.database = { Contact };
  next();
};
