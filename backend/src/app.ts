const express = require("express");

const PORT = process.env.PORT || 8000;
const app = express();

 


app.listen(PORT, (d: any) => { 
  console.log(`Connected on port:${PORT}`)  
})