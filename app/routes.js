//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

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