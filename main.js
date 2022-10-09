// navbar scrolling ---------------------------------------------------------------------------------
$(function () {
    $(document).scroll(function () {
        var $nav = $(".sticky-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

// countdown ----------------------------------------------------------------------------------------
$(document).ready(function () {
    // set final date
    var countDownDate = new Date("Oct 29, 2022 10:00:00").getTime();
    // update every 1 second
    var x = setInterval(function() {
        // get today's date/time
        var now = new Date().getTime();

        // find distance between now and final date
        var distance = countDownDate - now;

        // calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        days = (days.toString()).padStart(2, '0');
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        hours = (hours.toString()).padStart(2, '0');
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        minutes = (minutes.toString()).padStart(2, '0');
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        seconds = (seconds.toString()).padStart(2, '0');

        // display the result in "countdown" elt
        document.getElementById("countdown").innerHTML = days + "d: " + hours + "h: "
        + minutes + "m: " + seconds + "s ";

        // if finished, just display 0s
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "00d: 00h: 00m: 00s";
        }
    }, 1000);
});
