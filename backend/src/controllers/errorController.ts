import { Request, Response, NextFunction ,ErrorRequestHandler} from "express";


export const handle404 = (req:Request,res:Response,next:NextFunction)=>{
  res.status(404).json({
    message:"this endpoint doesn't exist,where are you going? 👀",
    statusCode: 404,
    
  })
}

// const show500 = (req:Request,res:Response,next:NextFunction)=>{
//   res.status(500).json({
//     message:"An error occured,we're fixing this.",
//   })
// }


export const handleError:ErrorRequestHandler = (error:any,req:Request,res:Response,next:NextFunction) => {
  const status = error.statusCode;
  const message = error.message;
  const data = error.data;
    console.log(error.stack , "error stack");
    console.log(error.details , "error details");

    console.log(message , "error message");
  if (!status) {
    return res.status(500).json({
      message: "An error occured we're working on fixing this",
      statusCode: 500,
    });
  }

  return res.status(status).json({
    message: message,
    statusCode: status,
  });
}