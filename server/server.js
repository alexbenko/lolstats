const express = require('express');
const path = require('path');
const app = express();

const port = 4200;

app.listen(port, () =>{
  console.log(`lolstats is runnin at port : ${port}`);
})

app.get('/lolstats_backend', (req,res)=>{
  res.send({express: "Connected to Backend!"});
})