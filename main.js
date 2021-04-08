$(document).ready(function () {

    // Refs
    var nextAngle = $(".next");
    var prevAngle = $(".prev");

    //Slide navigation
    nextAngle.click(function () {
        navSlide("next");
    });
    prevAngle.click(function () {
        navSlide("prev");
    });
})


/*************
 * FUNCTIONS
 ************/
function navSlide(direction) {
    var activeImg = $(".images img.active");
    var activeCircle = $(".nav i.active");

    // Reset
    activeImg.removeClass("active");
    activeCircle.removeClass("active");

    // Next
    if (direction === "next") {
        if (activeImg.hasClass("last")) {
            $(".images img.first").addClass("active");
            $(".nav i.first").addClass("active");
        }

        activeImg.next("img").addClass("active");
        activeCircle.next("i").addClass("active");
    }

    // Prev
    else if (direction === "prev") {
        if (activeImg.hasClass("first")) {
            $(".images img.last").addClass("active");
            $(".nav i.last").addClass("active");
        }

        activeImg.prev("img").addClass("active");
        activeCircle.prev("i").addClass("active");
    }
}
