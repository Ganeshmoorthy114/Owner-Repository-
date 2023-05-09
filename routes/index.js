const port = process.env.PORT || 3000;
const cors= require('cors');
const express = require('express');
const connect = require('./data/connection');
const routes = require('./routes/router');
connect();

const app = express(); // middleware
app.use(cors());
app.use(express.json());
app.use('/api',routes);

app.listen(port,()=>{
    console.log(`our application is running at port ${port}`)
})

