//moving testiminials

var scrollTime;
var scrollingCount = 0;
setTimeout('testimonialScroll()', 1000);
function testimonialScroll() {
    if (scrollingCount < 10000000) {
        var customersTestimonialContainer = document.getElementById("customers-testimonials-container");
        customersTestimonialContainer.scrollTop = customersTestimonialContainer.scrollTop + 1;
        if (customersTestimonialContainer.scrollTop == (400)) {
            setTimeout(function () {
                customersTestimonialContainer.scrollTop = 0;
                scrollingCount++;
            }, 2000);
        }
        scrollTime = setTimeout('testimonialScroll()', 30);
    }
}