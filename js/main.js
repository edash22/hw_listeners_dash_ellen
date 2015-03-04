
// ******************************************
// Global variables
// ******************************************
var numClicks = 0;
var theHeading = document.getElementById( "topH1" );

// ******************************************
// Event Listeners
// ******************************************

// Listens for Click event on heading element (id = topH1) and adds a new paragraph element
theHeading.addEventListener( "click", function () {
    numClicks++;

    // create a new paragraph element with incremented click count
    var newPara = document.createElement( "p" );
    newPara.innerHTML = "This is click number " + numClicks;

    // now put the new paragraph in the document
    document.body.appendChild( newPara );
})



