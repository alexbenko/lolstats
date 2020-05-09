const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const port =  process.env.PORT || 1234 ;

app.use(cors());
app.use(bodyParser.json()); //makes sure the body is parsed into a JSON
app.use(morgan('dev'));



app.use('/', express.static(path.join(__dirname, '../dist')));





app.listen( port, () =>{
  console.log(`lolstats is runnin at http://localhost:${port}`);
});

