const express = require("express");
const app = express();
require('dotenv').config();
const bodyParser = require("body-parser")
const cors = require('cors');
const route = require('./routes/routes')
app.use(cors());
app.use(bodyParser.json({limit:"200mb"}));
route(app);
app.listen(5000,()=>{
    console.log("listening");
});
