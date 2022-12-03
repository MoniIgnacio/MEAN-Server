const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const conectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useFindAndModify: false,
    });
    console.log('Base de datos conectada')
  } catch (error) {
    console.log(error);
    process.exit(1); // detenemos la app
  }
};

module.exports = conectDB;
