import mongoose from "mongoose";
// const mailSchema = new mongoose.Schema({
//   to: {
//     type: String,
//     required: true,
//     unique: true,
//     default: randomUUID(),
//   },
//   subject: {
//     type: String,
//     required: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
// });
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
    // ,
    // mails: [mailSchema],
});
export default mongoose.model("User", userSchema);
//# sourceMappingURL=User.js.map