'use strict';

function setup (app, handlers) {
    app.get('/', handlers.sayHello);
    app.get('/users',  handlers.onGetUsers);
    app.post('/users', handlers.onPostUsers);
}

exports.setup = setup;