import { Request,Response ,NextFunction} from "express"
const setHeader = (req:Request,res:Response,next:NextFunction) => {

  res.setHeader("Access-Control-Allow-Origin","*");

  res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,PATCH,DELETE");


  res.setHeader("Access-Control-Allow-Headers","Content-Type,Authorization");


  next();
}

export default setHeader;