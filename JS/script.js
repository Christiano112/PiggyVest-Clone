//moving testiminials

var scrollTime;
var scrollingCount = 0;
setTimeout('testimonialScroll()', 1000);
function testimonialScroll() {
    if (scrollingCount < Infinity) {
        var customersTestimonialContainer = document.getElementById("customers-testimonials-container");
        customersTestimonialContainer.scrollTop = customersTestimonialContainer.scrollTop + 1;
        if (customersTestimonialContainer.scrollTop == (customersTestimonialContainer.clientHeight)) {
            setTimeout(function () {
                customersTestimonialContainer.scrollTop = 0;
                scrollingCount++;
            }, 4000);
        }
        scrollTime = setTimeout('testimonialScroll()', 35);
    }
}

//navigation bar scroll function

window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    const navBar = document.getElementById("navBar");
    if (document.documentElement.scrollTop > 50) {
        navBar.classList.add("scroll");
    } else {
        navBar.classList.remove("scroll");
    }
}
