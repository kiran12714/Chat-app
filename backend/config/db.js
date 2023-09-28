const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://wwwkiranbabu258:wwwkiranbabu258@cluster0.mlouch3.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};
// mongoose.connect('mongodb://127.0.0.1:27017/404NF')
// .then(()=>{console.log("Mongoose Connection open!!!")})
// .catch(err=>{
//     console.log('Oh No!! mongoose connection error!!');
//     console.log(err)
// });

module.exports = connectDB;

