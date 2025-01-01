const express = require('express');
const bodyParser = require('body-parser');
const videoRoute = require('./routes/video');
const userRoute = require('./routes/user')
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.use('/video', videoRoute);
app.use('/user', userRoute);

app.listen(4000, ()=>console.log("Running on http://localhost:4000/"))