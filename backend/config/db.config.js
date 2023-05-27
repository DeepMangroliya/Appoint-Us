const mongoose = require("mongoose");
const { db, messages } = require("../constant/index.constant");

module.exports = () => {
  mongoose
    // .connect(
    //   "mongodb+srv://nevil:nevil@cluster0.0jsqqa1.mongodb.net/?retryWrites=true&w=majority"
    // )
    .connect("mongodb://localhost:27017/hospital-manegment")
    // mongoose.connect(db.localdb)
    .then(() => console.log(messages.conn))
    .catch((err) => console.log(err));
};
