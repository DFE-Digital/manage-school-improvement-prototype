//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

//********************
//* SPRINT 5 - Q2 - 25
//********************
require('./routes/sprint5-Q2-25/routes.js')(router);

//********************
//* SPRINT 2 - Q2 - 25
//********************
require('./routes/sprint2-Q2-25/routes.js')(router);

//********************
//* SPRINT 1 - Q2 - 25
//********************
require('./routes/sprint1-Q2-25/routes.js')(router);

//********************
//* SPRINT 6 - Q1 - 25
//********************
require('./routes/sprint6-Q1-25/routes.js')(router);

//********************
//* SPRINT 5 - Q1 - 25
//********************
require('./routes/sprint5-Q1-25/routes.js')(router);

//********************
//* SPRINT 4 - Q1 - 25
//********************
require('./routes/sprint4-Q1-25/routes.js')(router);

//********************
//* SPRINT 3 - Q1 - 25
//********************
require('./routes/sprint3-Q1-25/routes.js')(router);

//********************
//* SPRINT 2 - Q1 - 25
//********************
require('./routes/sprint2-Q1-25/routes.js')(router);

//********************
//* SPRINT 1 - Q1 - 25
//********************
require('./routes/sprint1-Q1-25/routes.js')(router);

//***************
//* SPRINT 7 - Q4
//***************
require('./routes/sprint7-Q4/routes.js')(router);

//***************
//* SPRINT 6 - Q4
//***************
require('./routes/sprint6-Q4/routes.js')(router);

//***************
//* SPRINT 5 - Q4
//***************
require('./routes/sprint5-Q4/routes.js')(router);

//***************
//* SPRINT 4 - Q4
//***************
require('./routes/sprint4-Q4/routes.js')(router);







// Add your routes above 
module.exports = router