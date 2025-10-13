// Add your routes here - above the module.exports line

//***************
//* SPRINT7-Q2-25
//***************

module.exports = function (router) {

  var version = "sprint1-Q3-25";


  // Run this code when a form is submitted to 'add-contact-answer'
 router.post('/' + version + '/address-routes', function(req, res) {
    
  // Make a variable to give it the value from the radio buttons on the index page  
  const addressAnswer = req.body["job-title"];

  // Check whether the variable matches a condition
  if (addressAnswer == "Headteacher") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-contact-details-address')
  }   
  else if (addressAnswer == "Chair of governors") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-contact-details-address')
  } 
  else if (addressAnswer == "Accounting officer for school") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-contact-details-address')
  }
  else if (addressAnswer == "Accounting officer for trust") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-contact-details-address')
  }
  else if (addressAnswer == "Accounting officer for supporting organisation") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-contact-details-address')
  }
  else if (addressAnswer == "Federation") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-contact-details-address')
  }
  else if (addressAnswer == "DfE") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-contact-details-address')
  }
  else {
    // Send user to ineligible page
    res.redirect('/' + version + '/add-contact-details')
  }
})



// Run this code when a form is submitted to 'add-contact-answer'
router.post('/' + version + '/address-routes-1', function(req, res) {
    
  // Make a variable to give it the value from the radio buttons on the index page  
  const addressAnswer = req.body["job-title"];

  // Check whether the variable matches a condition
  if (addressAnswer == "Headteacher") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-contact-details-address-1')
  }   
  else if (addressAnswer == "Chair of governors") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-contact-details-address-1')
  } 
  else if (addressAnswer == "Accounting officer for school") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-contact-details-address-1')
  }
  else if (addressAnswer == "Accounting officer for trust") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-contact-details-address-1')
  }
  else if (addressAnswer == "Accounting officer for supporting organisation") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-contact-details-address-1')
  }
  else if (addressAnswer == "Federation") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-contact-details-address-1')
  }
  else if (addressAnswer == "DfE") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-contact-details-address-1')
  }
  else {
    // Send user to ineligible page
    res.redirect('/' + version + '/add-contact-details-1')
  }
})





 // Run this code when a form is submitted to 'engagement-answer'
 router.post('/' + version + '/task-list/so-answer', function(req, res) {
    
  // Make a variable to give it the value from the checkbox on the index page  
  const supportingOrganisationAnswer = req.body["so-type"];

  // Check whether the variable matches a condition
  if (supportingOrganisationAnswer == "School") {
    // Send user to next page 
    res.redirect('/' + version + '/task-list/choose-supporting-organisation-school')
  }   
  else { 
    // Send user to next page 
    res.redirect('/' + version + '/task-list/choose-supporting-organisation-trust')
  }
})






  // Run this code when a form is submitted to 'engagement-answer'
 router.post('/' + version + '/engagement-answer', function(req, res) {
    
  // Make a variable to give it the value from the checkbox on the index page  
  const engagementConcernAnswer = req.body["engagement-concern"];

  // Check whether the variable matches a condition
  if (engagementConcernAnswer != "Yes") {
    // Send user to next page 
    res.redirect('/' + version + '/engagement-concern-recorded')
  }   
  else { 
    // Send user to next page 
    res.redirect('/' + version + '/record-engagement-concern-validation-2')
  }
})


 // Run this code when a form is submitted to 'add-contact-answer'
 router.post('/' + version + '/add-contact-answer', function(req, res) {
    
  // Make a variable to give it the value from the radio buttons on the index page  
  const contactAnswer = req.body["organisation"];

  // Check whether the variable matches a condition
  if (contactAnswer == "School") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-school')
  }   
  else if (contactAnswer == "Trust") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-trust')
  } 
  else if (contactAnswer == "Local authority") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-la')
  }
  else if (contactAnswer == "Supporting organisation") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-supporting-organisation')
  }
  else if (contactAnswer == "Diocese") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-diocese')
  }
  else if (contactAnswer == "Federation") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-federation')
  }
  else if (contactAnswer == "DfE") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-dfe')
  }
  else {
    // Send user to ineligible page
    res.redirect('/' + version + '/add-role-other')
  }
})


 // Run this code when a form is submitted to 'add-contact-answer'
 router.post('/' + version + '/add-contact-answer-1', function(req, res) {
    
  // Make a variable to give it the value from the radio buttons on the index page  
  const contactAnswer = req.body["organisation"];

  // Check whether the variable matches a condition
  if (contactAnswer == "School") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-school-1')
  }   
  else if (contactAnswer == "Trust") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-trust-1')
  } 
  else if (contactAnswer == "Local authority") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-la-1')
  }
  else if (contactAnswer == "Supporting organisation") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-supporting-organisation-1')
  }
  else if (contactAnswer == "Diocese") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-diocese-1')
  }
  else if (contactAnswer == "Federation") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-federation-1')
  }
  else if (contactAnswer == "DfE") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-dfe-1')
  }
  else {
    // Send user to ineligible page
    res.redirect('/' + version + '/add-role-other-1')
  }
})



// Run this code when a form is submitted to 'add-contact-answer'
router.post('/' + version + '/add-contact-answer-2', function(req, res) {
    
  // Make a variable to give it the value from the radio buttons on the index page  
  const contactAnswer = req.body["organisation"];

  // Check whether the variable matches a condition
  if (contactAnswer == "School") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-school-2')
  }   
  else if (contactAnswer == "Trust") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-trust-2')
  } 
  else if (contactAnswer == "Local authority") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-la-2')
  }
  else if (contactAnswer == "Supporting organisation") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-supporting-organisation-2')
  }
  else if (contactAnswer == "Diocese") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-diocese-2')
  }
  else if (contactAnswer == "Federation") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-federation-2')
  }
  else if (contactAnswer == "DfE") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-dfe-2')
  }
  else {
    // Send user to ineligible page
    res.redirect('/' + version + '/add-role-other-2')
  }
})



// Run this code when a form is submitted to 'add-contact-answer'
router.post('/' + version + '/add-contact-answer-3', function(req, res) {
    
  // Make a variable to give it the value from the radio buttons on the index page  
  const contactAnswer = req.body["organisation"];

  // Check whether the variable matches a condition
  if (contactAnswer == "School") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-school-3')
  }   
  else if (contactAnswer == "Trust") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-trust-3')
  } 
  else if (contactAnswer == "Local authority") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-la-3')
  }
  else if (contactAnswer == "Supporting organisation") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-supporting-organisation-3')
  }
  else if (contactAnswer == "Diocese") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-diocese-3')
  }
  else if (contactAnswer == "Federation") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-federation-3')
  }
  else if (contactAnswer == "DfE") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-dfe-3')
  }
  else {
    // Send user to ineligible page
    res.redirect('/' + version + '/add-role-other-3')
  }
})


// Run this code when a form is submitted to 'add-contact-answer'
router.post('/' + version + '/add-contact-answer-4', function(req, res) {
    
  // Make a variable to give it the value from the radio buttons on the index page  
  const contactAnswer = req.body["organisation"];

  // Check whether the variable matches a condition
  if (contactAnswer == "School") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-school-4')
  }   
  else if (contactAnswer == "Trust") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-trust-4')
  } 
  else if (contactAnswer == "Local authority") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-la-4')
  }
  else if (contactAnswer == "Supporting organisation") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-supporting-organisation-4')
  }
  else if (contactAnswer == "Diocese") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-diocese-4')
  }
  else if (contactAnswer == "Federation") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-federation-4')
  }
  else if (contactAnswer == "DfE") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-role-dfe-4')
  }
  else {
    // Send user to ineligible page
    res.redirect('/' + version + '/add-role-other-4')
  }
})





 // Run this code when a form is submitted to 'add-contact-answer'
 router.post('/' + version + '/add-contact-2-answer', function(req, res) {
    
  // Make a variable to give it the value from the radio buttons on the index page  
  const contactAnswer2 = req.body["contact-2"];

  // Check whether the variable matches a condition
  if (contactAnswer2 == "Headteacher") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-another-contact-details-address')
  }   
  else if (contactAnswer2 == "Chair of governors") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-another-contact-details-address')
  } 
  else if (contactAnswer2 == "Trust chief accounting officer") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-another-contact-details-address')
  }
  else if (contactAnswer2 == "Supporting organisation chief accounting officer") { 
    // Send user to next page 
    res.redirect('/' + version + '/add-another-contact-details-address')
  }
  else {
    // Send user to ineligible page
    res.redirect('/' + version + '/add-another-contact-details')
  }
})





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

  // Run this code when a form is submitted to 'funding-answer'
  router.post('/' + version + '/start-new-project-v2/funding-answer', function(req, res) {
    
    // Make a variable to give it the value from the radio buttons on the index page  
    const fundingAnswer = req.body["received-funding"];

    // Check whether the variable matches a condition
    if (fundingAnswer == "Yes") { 
      // Send user to next page 
      res.redirect('/' + version + '/start-new-project-v2/add-funding')
    }   
    else {
      // Send user to ineligible page
      res.redirect('/' + version + '/project-list-school-added')
    }
  })

  // Run this code when a form is submitted to 'funding-answer'
  router.post('/' + version + '/start-new-project-v3/funding-answer', function(req, res) {
    
    // Make a variable to give it the value from the radio buttons on the index page  
    const fundingAnswer = req.body["received-funding"];

    // Check whether the variable matches a condition
    if (fundingAnswer == "Yes") { 
      // Send user to next page 
      res.redirect('/' + version + '/start-new-project-v3/add-funding')
    }   
    else {
      // Send user to ineligible page
      res.redirect('/' + version + '/project-list-school-added-v3')
    }
  })

 // Run this code when a form is submitted to 'funding-answer'
 router.post('/' + version + '/task-list/funding-answer', function(req, res) {
    
  // Make a variable to give it the value from the radio buttons on the index page  
  const fundingAnswer = req.body["received-funding"];

  // Check whether the variable matches a condition
  if (fundingAnswer == "Yes") { 
    // Send user to next page 
    res.redirect('/' + version + '/task-list/add-funding')
  }   
  else {
    // Send user to ineligible page
    res.redirect('/' + version + '/task-list')
  }
})

 // Run this code when a form is submitted to 'funding-answer'
 router.post('/' + version + '/task-list-locked/funding-answer-locked', function(req, res) {
    
  // Make a variable to give it the value from the radio buttons on the index page  
  const fundingAnswer = req.body["received-funding"];

  // Check whether the variable matches a condition
  if (fundingAnswer == "Yes") { 
    // Send user to next page 
    res.redirect('/' + version + '/task-list-locked/add-funding')
  }   
  else {
    // Send user to ineligible page
    res.redirect('/' + version + '/task-list-locked')
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

   // Run this code when a form is submitted to 'inspected-again-answer'
   router.post('/' + version + '/start-new-project-v1/inspected-again-answer', function(req, res) {
    
    // Make a variable to give it the value from the radio buttons on the index page  
    const inspectedAgain = req.body["inspected-again"];

    // Check whether the variable matches a condition
    if (inspectedAgain == "Yes") { 
      // Send user to next page 
      res.redirect('/' + version + '/start-new-project-v1/outcome-of-inspection')
    }   
    else {
      // Send user to ineligible page
      res.redirect('/' + version + '/start-new-project-v1/converting-or-transferring')
    }
  })


  // Run this code when a form is submitted to 'outcome-answer'
  router.post('/' + version + '/start-new-project/outcome-answer', function(req, res) {

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

  // Run this code when a form is submitted to 'outcome-answer'
  router.post('/outcome-answer', function (req, res) {

    // Make two variables and give them the values from ‘outcome-education' and 'outcome-leadership'
    const outcomeEducation = req.body["outcome-education"];
    const outcomeLeadership = req.body["outcome-leadership"];

    // Check whether the variable matches a condition
    if (outcomeEducation  == "Requires improvement" || outcomeLeadership  == "Requires improvement"){
      // Send user to next page
      res.redirect('/' + version + '/start-new-project-v1/converting-or-transferring')
    } else {
      // Send user to ineligible page
      res.redirect('/' + version + '/start-new-project-v1/not-eligible')
    }
  })

  // Run this code when a form is submitted to 'convert-or-transfer-answer'
    router.post('/' + version + '/start-new-project/convert-or-transfer-answer', function(req, res) {

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


   // Run this code when a form is submitted to 'convert-or-transfer-answer'
   router.post('/convert-or-transfer-answer', function (req, res) {

    // Make a variable and give it the value from ‘inspected’-again
    const convertTransfer = req.body["converting-or-transferring"];

    // Check whether the variable matches a condition
    if (convertTransfer == "Yes"){
      // Send user to next page
      res.redirect('/' + version + '/start-new-project-v1/not-eligible')
    } else {
      // Send user to ineligible page
      res.redirect('/' + version + '/start-new-project-v1/give-details-of-funding')
    }
  })


// After all rules
}

