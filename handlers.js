'use strict';

const handlers = {};
const users = require('./users.json');

handlers.sayHello = function sayHello(request,response){
    response.send('Hello World!');
};

handlers.onGetUsers = function onGetUsers(request,response){
    response.setHeader('Content-Type', 'application/json');
    return response.send(JSON.stringify(users));
};

handlers.onPostUsers = function onPostUsers(request,response){
    const newUser = {
        name: request.body.name || 'no name',
        email: request.body.email || 'no email',
        age: request.body.age || 0
    }
    users.users.push(newUser);
    return response.send(users);
};

module.exports = handlers;