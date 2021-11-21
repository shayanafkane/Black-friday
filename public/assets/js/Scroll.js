$(window).scroll(function () {

    //get scroll position
    var topWindow = $(window).scrollTop();
    //multipl by 1.5 so the arrow will become transparent half-way up the page
    var topWindow = topWindow * 1.5;

    //get height of window
    var windowHeight = $(window).height();

    //set position as percentage of how far the user has scrolled 
    var position = topWindow / windowHeight;
    //invert the percentage
    position = 1 - position;
});
$(function () {

    $('a[href*=#]:not([href=#])').on(click, function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
(function () {
    var curYPos, curXPos, curDown;

    window.addEventListener('mousemove', function (e) {
        if (curDown) {
            window.scrollBy(curXPos - e.pageX, curYPos - e.pageY);
        }
    });

    window.addEventListener('mousedown', function (e) {
        curYPos = e.pageY;
        curXPos = e.pageX;
        curDown = true;
    });

    window.addEventListener('mouseup', function (e) {
        curDown = false;
    });
})()