const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');


var port =  process.env.PORT || 420 ;

app.use(cors());
app.use(bodyParser.json()); //makes sure the body is parsed into a JSON
app.use(morgan('dev'));



//this send the file entire app to the server
app.use('/', express.static(path.join(__dirname, '../dist')));





app.listen( port, () =>{
  console.log(`lolstats is runnin at http://localhost:${port}`);
});

