
class AppError extends Error{
  statusCode: number | undefined;
  constructor(message: string | undefined = undefined ,statusCode: number | undefined  = undefined){
    super(message);
    this.statusCode = statusCode;
  }
}


export default AppError;