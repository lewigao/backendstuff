//tried to follow this: https://www.youtube.com/watch?v=zwcvXd3kGbw

//.env is used for secret hiding, best practice to keep in same directory as root,
//ALSO ADD IT TO .gitignore

//imports the dotenv library, .config() loads the (can be specified) .env file
//require('dotenv').config();
require('dotenv').config({ 
    path: './.env.development' 
}); // Load .env.development

console.log(process.env.MY_VAR);
