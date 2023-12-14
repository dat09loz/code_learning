import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'], //print out the string if false
    required: [true, 'Email is required!']
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    "Username invalid, it should contain 3-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
  }
});

//create a new model and assign the model to the "User" variable
//if "User" model already exists, mongoose assigns that existing model to the "User variable"
const User = models.User || model("User", UserSchema);

export default User;

