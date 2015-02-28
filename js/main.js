/******************************
*  Global Variables
******************************/

var theSecretMessage = document.getElementById( "secretMessage");
var theYesButton = document.getElementById( "yesButton" );
var theNoButton = document.getElementById( "noButton" );
var theDogImage = document.getElementById( "dogImage" );
var dogImage = 1

/******************************
*  Event Listeners
******************************/

// Item: Yes Button
// Trigger: click
// Action: Displays a message (by changing div style to display: block)

theYesButton.addEventListener("click", function() {
    theSecretMessage.style.display = "block";
})


// Item: No Button
// Trigger: mouseup
// Action: Displays an alert message

theNoButton.addEventListener("mouseup", function() {
    alert("That's ok. I didn't know this either.");
})


// Item: Dog image
// Trigger: mouseover
// Action: Displays a different dog image; rotates through three different images

theDogImage.addEventListener("mouseover", function() {
    dogImage++;
    if (dogImage > 3) {
        dogImage = 1;
    }
    theDogImage.src = "img/dog-on-subway-" + dogImage + ".jpg";
})