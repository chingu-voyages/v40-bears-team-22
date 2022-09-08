import { Request, Response, NextFunction } from "express";
import * as bcrypt from "bcrypt";
import AppError from "../errors/custom-error";
import User from "../models/user";





export const postSignup = async (req: Request, res: Response, next: NextFunction) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const isRegistered = await User.find({
    email
  });

  // console.log(isRegistered , "user");
  if(isRegistered[0]){
    const error = new AppError();
    error.message = 'email already exists';
    error.statusCode = 400;
    return next(error);
  }

  const hashedPassword = await bcrypt.hash(password,12);

  // console.log(hashedPassword , "HashedPD");

  const newuser  = new User({ 
    username,
    email,
    password:hashedPassword
  });

  const savedUser = await newuser.save();

  const user =  {
    username: savedUser.username,
    email: savedUser.email,
    points: savedUser.points,
    id: savedUser._id,
    profile_description: savedUser.profile_description,
    skills_to_learn: savedUser.skills_to_learn,
    skills_to_teach: savedUser.skills_to_teach,
  }


  return res.status(201).json({
    message:"user created",
    status:201,
    user,
  });
}


export const postLogin = async (req: Request, res: Response, next: NextFunction) => {
  const {email,password} = req.body;
  const foundUser = await User.findOne({
    email
  });
  console.log(foundUser , "foundUser")

  if(!foundUser){
    const error = new AppError();
    error.statusCode = 400;
    error.message = "User does not exist or has not signed up.";
    return next(error);
  }

  const checkPassword = bcrypt.compare(password, foundUser.password);

  if(!checkPassword){
    const error = new AppError();
    error.statusCode = 400;
    error.message = "Credentials not valid.";
    return next(error);
  }

  const user =  {
    username: foundUser.username,
    email: foundUser.email,
    points: foundUser.points,
    id: foundUser._id,
    profile_description: foundUser.profile_description,
    skills_to_learn: foundUser.skills_to_learn,
    skills_to_teach: foundUser.skills_to_teach,
  }

  res.status(200).json({
    user
  })
}


export const postLogout = (req: Request, res: Response, next: NextFunction) => {
  res.send('Express + TypeScript Server');
}

