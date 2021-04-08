$(document).ready(function() {

    // Refs
    var nextAngle = $(".next");
    var prevAngle = $(".prev");

    //Slide navigation
    nextAngle.click(function() {
        navSlide("next");
    });
    prevAngle.click(function() {
        navSlide("prev");
    });
})


/*************
 * FUNCTIONS
 ************/
