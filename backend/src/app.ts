import express from "express";

const PORT = process.env.PORT || 8000;
const app = express();



app.use(express.json());
 


app.listen(PORT, () => { 
  console.log(`Connected on port:${PORT}`)  
})