//followed this tutorial: https://youtu.be/lY6icfhap2o?si=wbOJjT4LATkX4k1Y

//REMEMBER TO CALL next() IN ORDER TO EXIT OUT OF MIDDLEWARE STACK
//OTHERWISE IT WILL HANG AND NEVER CONTINUE

const express = require('express');
const app = express();

//this gets run at the global level, BEFORE anything else
//app.use() expects a function with the (req, res, next) parameters
//app.use(logger);

//middleware gets run in the order that it is defined
//app.use() DEFINES middleware that will be used BEFPRE route handlers
//whichever way app.use() is called, will determine our sequence of execution
    //i.e. the next() function will run the NEXT app.use() function

//NORMALLY you want global actions to be at the TOP of files, so that they execute before anything else


//without next(), going to the homepage will never use 'log'
app.get('/', (req, res, next) => {
    console.log('home page')
    res.send('home page');
    next();
});

//app.get() accepts middleware as an argument
//it accepts a path, and a list of middleware
app.get('/users', auth, (req, res) => {
    console.log('users page');
    console.log('user is admin: ' + req.admin)
    res.send('users page');
});

//FIRST MIDDLEWARE
app.use(logger);

//next just calls the next function in our middleware stack
//use 'next' when the middleware function modifies a request/response BUT doesn't end the response (or handling errors)
function logger(req, res, next){
    console.log('log');
    next();
}
//^^ this is the function that our middleware calls

//SECOND MIDDLEWARE
app.use(logger);

//middleware function
function auth(req, res, next){
    //middleware can access the (req, res), aka the request and response parameters
    if (req.query.admin === 'true'){
        //you can set variables on the request and response 
        req.admin = true;
        console.log('auth');
        next();
    }
    else {
        //res.send() will END our middleware stack
        res.send('no auth');
    }
}

//copy of auth function
function test(req, res, next){
    //middleware can access the (req, res), aka the request and response parameters
    if (req.query.admin === 'true'){
        //you can set variables on the request and response 
        req.admin = true;
        console.log('auth');
        //next is NOT the same as returning from function
        next();
        //we MUST return afterwards, because next() will NOT exit the loop, it just continues onto res.send() 
        return;
    }
    //WITHOUT an else statment, res.send() will return a sent headers error
    res.send('no auth');
}
//we can utilize this behavior by sandwiching functions/events before and after the next() to get intended behavior

app.listen(3000);

//going to the home, '/', directory
    //logs "log" twice, because we have two middlewares after
//if http://localhost:3000/users?admin=true: going to the users, '/users', directory
    //tries to access '/users', BUT encounters 'auth' argument, checks for 'req.query.admin', logs "auth", logs "users page", logs user admin prompt
//if http://localhost:3000/users?admin=false or just ./users : going to the users, '/users', directory
    //tries to access '/users', BUT encounters 'auth' argument, checks for 'req.query.admin', res.send()s "no auth" 
