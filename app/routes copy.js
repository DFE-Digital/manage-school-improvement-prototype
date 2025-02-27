//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

var version = "sprint4-Q4";


// Run this code when a form is submitted to 'inspected-again-answer'
    router.post('/inspected-again-answer', function (req, res) {

    // Make a variable and give it the value from ‘inspected’-again
    var inspectedAgain = req.session.data['inspected-again']
  
    // Check whether the variable matches a condition
    if (inspectedAgain == "Yes"){
      // Send user to next page
      res.redirect(version + '/pages/start-new-project/outcome-of-inspection')
    } else {
      // Send user to ineligible page
      res.redirect(version + '/pages/start-new-project/converting-or-transferring')
    }
  
  })


  // Run this code when a form is submitted to 'outcome-answer'
  router.post('/outcome-answer', function (req, res) {

    // Make two variables and give them the values from ‘outcome-education' and 'outcome-leadership'
    var outcomeEducation = req.session.data['outcome-education'];
    var outcomeLeadership = req.session.data['outcome-leadership']
  
    // Check whether the variable matches a condition
    if (outcomeEducation  == "Requires improvement" || outcomeLeadership  == "Requires improvement"){
      // Send user to next page
      res.redirect(version + '/pages/start-new-project/converting-or-transferring')
    } else {
      // Send user to ineligible page
      res.redirect(version + '/pages/start-new-project/not-eligible')
    }
  
  })

  // Run this code when a form is submitted to 'convert-or-transfer-answer'
  router.post('/convert-or-transfer-answer', function (req, res) {

    // Make a variable and give it the value from ‘inspected’-again
    var convertTransfer = req.session.data['converting-or-transferring']
  
    // Check whether the variable matches a condition
    if (convertTransfer == "Yes"){
      // Send user to next page
      res.redirect(version + '/pages/start-new-project/not-eligible')
    } else {
      // Send user to ineligible page
      res.redirect(version + '/pages/start-new-project/give-details-of-funding')
    }
  
  })