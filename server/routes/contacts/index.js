const express = require("express");
const router = express.Router();

router.get("/contacts", (req, res) => {
  console.log("req");
  return new req.database.Contact()
    .fetchAll()
    .then(contacts => {
      return res.json(contacts);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get("/users", (req, res) => {
  return new req.database.User()
    .fetchAll()
    .then(users => {
      console.log(users);
      return res.json(users);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.post("/login", (req, res) => {
  let loginObj = req.body;

  return new req.database.User().fetchAll().then(users => {
    let arr = users.models;
    for (var i = 0; i < arr.length; i++) {
      if (loginObj.username === arr[i].attributes.username) {
        console.log("loginObj returned ", loginObj);
        return res.json(loginObj);
      }
    }
  });
});

module.exports = router;
