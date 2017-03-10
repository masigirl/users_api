'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

const users = { 
    users: [
        { name: 'Omar', email: 'omarvides@gmail.com', age: 30 },
        { name: 'Masiel', email: 'machilok@gmail.com', age: 28 }
    ]
};


app.get('/', function(request,response){
    response.send('Hello World!');
});

app.get('/users', function onGetUsers(request,response){
    response.setHeader('Content-Type', 'application/json');
    return response.send(JSON.stringify(users));
});

app.post('/users', function onPostUsers(request,response){
    const newUser = {
        name: request.body.name || 'no name',
        email: request.body.email || 'no email',
        age: request.body.age || 0
    }
    users.users.push(newUser);
    return response.send(users);
});

app.listen(3000,function(){
    console.log('Example application listening on port 3000!');
});