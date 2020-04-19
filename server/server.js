const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

const port = 4200;

app.use(cors());
app.use(bodyParser.json()); //makes sure the body is parsed into a JSON

//app.get('/test', (req,res) => res.send('Set up Correctly')); want to make sure the api is set up

//this send the file entire app to the server
app.use('/', express.static(path.join(__dirname, '../dist')));

/*app.get('/lolstats_backend', (req,res)=>{
  res.send({express: "Connected to Backend!"});
});
*/

app.listen(port, () =>{
  console.log(`lolstats is runnin at port : ${port}`);
});

