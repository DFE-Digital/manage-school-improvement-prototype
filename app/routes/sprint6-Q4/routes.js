// Add your routes here - above the module.exports line

//************
//* SPRINT6-Q4
//************

module.exports = function (router) {

  var version = "sprint6-Q4";

  // Routes for eligibility questions in the 'Add a school' journey

  // Run this code when a form is submitted to 'funding-answer'
  router.post('/' + version + '/start-new-project/funding-answer', function(req, res) {
    
    // Make a variable to give it the value from the radio buttons on the index page  
    const fundingAnswer = req.body["received-funding"];

    // Check whether the variable matches a condition
    if (fundingAnswer == "Yes") { 
      // Send user to next page 
      res.redirect('/' + version + '/start-new-project/add-funding')
    }   
    else {
      // Send user to ineligible page
      res.redirect('/' + version + '/project-list-school-added')
    }
  })

  // Routes for eligibility questions in the 'Add a school' journey

  // Run this code when a form is submitted to 'inspected-again-answer'
  router.post('/' + version + '/start-new-project/inspected-again-answer', function(req, res) {
    
    // Make a variable to give it the value from the radio buttons on the index page  
    const inspectedAgain = req.body["inspected-again"];

    // Check whether the variable matches a condition
    if (inspectedAgain == "Yes") { 
      // Send user to next page 
      res.redirect('/' + version + '/start-new-project/outcome-of-inspection')
    }   
    else {
      // Send user to ineligible page
      res.redirect('/' + version + '/start-new-project/converting-or-transferring')
    }
  })


  // Run this code when a form is submitted to 'outcome-answer'
  router.post('/outcome-answer', function (req, res) {

    // Make two variables and give them the values from ‘outcome-education' and 'outcome-leadership'
    const outcomeEducation = req.body["outcome-education"];
    const outcomeLeadership = req.body["outcome-leadership"];

    // Check whether the variable matches a condition
    if (outcomeEducation  == "Requires improvement" || outcomeLeadership  == "Requires improvement"){
      // Send user to next page
      res.redirect('/' + version + '/start-new-project/converting-or-transferring')
    } else {
      // Send user to ineligible page
      res.redirect('/' + version + '/start-new-project/not-eligible')
    }
  })

  // Run this code when a form is submitted to 'convert-or-transfer-answer'
  router.post('/convert-or-transfer-answer', function (req, res) {

    // Make a variable and give it the value from ‘inspected’-again
    const convertTransfer = req.body["converting-or-transferring"];

    // Check whether the variable matches a condition
    if (convertTransfer == "Yes"){
      // Send user to next page
      res.redirect('/' + version + '/start-new-project/not-eligible')
    } else {
      // Send user to ineligible page
      res.redirect('/' + version + '/start-new-project/give-details-of-funding')
    }
  })


// After all rules
}

