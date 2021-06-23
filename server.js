const express = require('express');
const bodyParser  = require('body-parser')
var cors = require('cors')
const app = express();
const mongoose = require("mongoose")
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const infoDocs = require('./docs')
require('dotenv').config();

console.log(process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cors())
    app.use(express.json());
    app.use("/clients", require("./routes/clients"));
    app.use("/providers", require("./routes/providers"));

    app.use('/info-docs',swaggerUI.serve,swaggerUI.setup(infoDocs));
 
    app.listen(3000, function () {
        console.log('listening on 3000')
    })
})

