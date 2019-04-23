const express = require("express");
const router = express.Router();

router.get("/contacts", (req, res) => {
  return new req.database.Contact()
    .fetchAll()
    .then(contacts => {
      console.log(contacts);
      return res.json(contacts);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
