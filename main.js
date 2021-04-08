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
function navSlide(direction) {
    var activeImg = $(".images img.active");

    // Reset
    activeImg.removeClass("active");

    // Next
    if(direction === "next") {
        if(activeImg.hasClass("last")) {
            $(".images img.first").addClass("active");
        }

        activeImg.next("img").addClass("active");
    }

    // Prev
    else if(direction === "prev") {
        if(activeImg.hasClass("first")) {
            $(".images img.last").addClass("active");
        }

        activeImg.prev("img").addClass("active");
    }
}
