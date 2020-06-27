require('dotenv').config({ path: '../.env.local' });

const express = require('express');
const cors = require('cors');
const app = express();

const pool = require('./db');

app.use(cors());
app.use(express.json());

/*
  ROUTES
*/

//create

//get all

//get single

//update

//delete

app.listen(5000, () => {
  console.log('server has started on port 5000');
});
