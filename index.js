'use strict';
const express = require('express');
const app = express();
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
    // Get reponse from request
    users.users.push({ name: 'Dummy', email: 'dummy@gmail.com', age: 100 });
});

app.listen(3000,function(){
    console.log('Example application listening on port 3000!');
});