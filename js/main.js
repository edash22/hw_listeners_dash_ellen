// ******************************************
// Global variables
// ******************************************

var theForm = document.getElementById( "contactForm" );

// ******************************************
// Event Listeners
// ******************************************

// Listens for Click event on form element (id = contactForm) and logs form fields (if provided)
theForm.addEventListener( "submit", function (event) {
    event.preventDefault();
    // log the form fields
    console.log( "The firstName is: " + document.getElementById("first").value);
    console.log( "The lastName is: " + document.getElementById("last").value);
    console.log( "The email is: " + document.getElementById("email").value);
    console.log( "The message is: " + document.getElementById("message").value);
})
