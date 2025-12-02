//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here


    $('#reset-checkboxes').on('click', function(e) {
      e.preventDefault(); // Prevent default link behavior
      // Select all checked checkboxes and uncheck them
      $('input[type=checkbox]:checked').prop('checked', false);

      // Optional: Clear the session data for the specific checkbox group
      // You would need to know the name of your checkbox group, e.g., "exports"
      // If you want this to persist across page navigations within the session
      // This requires a more complex server-side implementation
    });

    


})
