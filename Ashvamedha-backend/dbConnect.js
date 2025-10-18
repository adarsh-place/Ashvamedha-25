const mongoose = require("mongoose");

module.exports = async () => {
  
  // const mongoURL = `mongodb+srv://meenakshi:${process.env.DB_ACCESS_KEY}@cluster0.4g5xdvl.mongodb.net/?retryWrites=true&w=majority`;
  // const mongoURL = `mongodb+srv://nishanttomar910:${process.env.DB_ACCESS_KEY}@cluster0.feh0c.mongodb.net/?retryWrites=true&w=majority`
  const mongoURL = `mongodb+srv://ashvamedha_25:${process.env.DB_ACCESS_KEY}@cluster0.lg9pgj8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  try {
    const connect = await mongoose.connect(mongoURL);
    console.log(`mongodb connected ${connect.connection.host}`);
  } catch (e) {
    console.log("this is the error from mongodb side", e);
    process.exit(1);
  }
};
