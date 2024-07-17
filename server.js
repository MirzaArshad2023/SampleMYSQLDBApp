const express = require("express");
const cors = require('cors');
const tvShowRoutes = require("./Routes/tvShowRoutes")

const app = express();
require("dotenv").config();

let dbConnect  = require('./dbConnect')
// parse requests of content-type -application/json
app.use(express.json());
app.use(cors());
app.use('/api/tvshows', tvShowRoutes);
app.get("/", (req, res) => {
res.json({ message: "Welcome to my sequelize application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});