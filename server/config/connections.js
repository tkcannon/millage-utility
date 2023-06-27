const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/millage-utility" // replace MERN-TEMPLATE with name of db
);

module.exports = mongoose.connection;
