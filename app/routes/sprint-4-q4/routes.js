// Add your routes here - above the module.exports line

//***********
//* SPRINT 4 Q4
//***********
module.exports = function (router) {

  var version = "sprint4-Q4";

  router.post('/' + version + '/start-new-project/inspected-again-answer', function(req, res) {
    // Make a variable to give it the value from the radio buttons on the index page  
    var inspectedAgain = req.session.data['inspected-again']

    // Check whether the variable matches a condition
    if (inspectedAgain == "yes") { 
      // Send user to next page 
      res.redirect('/' + version + '/pages/start-new-project/outcome-of-inspection')

    }   
    else {
      // Send user to ineligible page
      res.redirect(version + '/pages/start-new-project/converting-or-transferring')
    }

  })

}



