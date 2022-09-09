import {Schema,model , ObjectId,Types}  from "mongoose";

interface InterfaceUser {

  username?: string;
  firstname?: string;
  lastname?: string;
  password: string;
  email: string;
  avatar?: string;
  points?:number;
  profile_description?:string;   
  skills_to_teach?: any[],
  skills_to_learn?: any[],

}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<InterfaceUser>({
  username: { type: String },
  email: { type: String, required: true },
  firstname: String,
  lastname: String,
  password: { type: String, required: true },
  avatar: String,
  points:{type:Number , default: 0},
  profile_description: [
    {
      description:{type:String}
    }
  ],
  skills_to_learn: [
    {
      skill: String
    }
  ],
  skills_to_teach: [
    {
      skill: String
    }
  ]
});
// 3. Create a Model.
const User = model('User', userSchema);
export default User;