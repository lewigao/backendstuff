//used: https://youtu.be/0Hu27PoloYw?si=fEgAzu6M4lNiGNPX

const express = require('express');
const app = express();
const PORT = 3000;

//these routes allow use to access the pirate and police Routers
const pirateRoutes = require('./routes/pirates');
const seapoliceRoutes = require('./routes/seapolice');

//having BOTH pirates and police routes in the same file is a bad idea
//so, we will separate them into different files

//the first argument will be appended to all routes related to pirates
app.use('/pirates', pirateRoutes);
//the first argument will be appended to all routes related to sea police
app.use('/seapolice', seapoliceRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//run using "npm run dev", "npm run start", or "node index.js"