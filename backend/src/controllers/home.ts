import {Request , Response , NextFunction} from "express";
const getIndex = (req:Request,res:Response,next:NextFunction) => {
  res.status(200).json({
    message:"Welcome to home"
  });
}

export default getIndex;