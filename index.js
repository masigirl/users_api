'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const handlers = require('./handlers');
const routes = require('./routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

routes.setup(app, handlers);

app.listen(3000, function(){
    console.log('Example application listening on port 3000!');
});