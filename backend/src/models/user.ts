import {Schema,model}  from "mongoose";

interface InterfaceUser {
  username?: string;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<InterfaceUser>({
  username: { type: String },
  email: { type: String, required: true },
  firstname: String,
  lastname: String,
  password: String,
  avatar: String,
});
// 3. Create a Model.
const User = model('User', userSchema);