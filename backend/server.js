/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

//const express = require('express')
import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';

// Importing user route
import router from './routes/Assignment.js';
// const router = require('router')
import cors from 'cors';
// const bodyParser = require('body-parser')

const app = express()
const port = 3001
app.use(cors());
app.use(bodyParser.json())
// Adding a Router
app.use('/assignment', router);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


