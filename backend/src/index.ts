import app from "./app.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;
const mongoDB = "mongodb://127.0.0.1:27017/emailmarketingapp";


mongoose.connect(mongoDB,
).then(() => {
  app.listen(PORT, () =>
    console.log(`Server Running on port no ${PORT} and Connected To MongoDB Database ${mongoose.connection.host}`))
}).catch((error) => {
  console.log(`MongoDB database Error ${error}`)
});
