const express = require("express");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contacts/index");
const decorator = require("./database/decorator");

//data vars
const PORT = process.env.PORT || 8080;

// if (!PORT) {
//   console.log("No Port Found");
// }
// if (!SESSION_SECRET) {
//   console.log("No Session Secret Found");
// }
// if (!REDIS_HOSTNAME) {
//   console.log("No Redis Hostname Found");
// }
// if (!PORT || !SESSION_SECRET || !REDIS_HOSTNAME) {
//   return process.exit(1);
// }

//middleware
const app = express();
app.use(bodyParser.json({ extended: true }));

//decorate request with database
app.use(decorator);

app.use("/api", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is Running on Port : ${PORT}`);
});
