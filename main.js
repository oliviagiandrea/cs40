// show panelists when btnShowPanelists is clicked, vice versa for btnHide Panelists
$(document).ready(function() {
    if ($(window).width() < 400) {
        $('#btnShowPanelists').removeClass('hidden');
        $('#btnShowPanelists').addClass('shown');
        $('#panelists').removeClass('shown');
        $('#panelists').addClass('hidden');
    } else {
        $('#btnShowPanelists').removeClass('shown');
        $('#btnShowPanelists').addClass('hidden');
        $('#panelists').removeClass('hidden');
        $('#panelists').addClass('shown');
    }

    var currentPos = $(window).scrollTop();
    if (currentPos > 400) {
        $('#nav').addClass('activated');
    } else {
        $('#nav').removeClass('activated');
    }
});

window.onresize = function() {
    if ($(window).width() < 400) {
        $('#btnShowPanelists').removeClass('hidden');
        $('#btnShowPanelists').addClass('shown');
        $('#panelists').removeClass('shown');
        $('#panelists').addClass('hidden');
    } else {
        $('#btnShowPanelists').removeClass('shown');
        $('#btnShowPanelists').addClass('hidden');
        $('#panelists').removeClass('hidden');
        $('#panelists').addClass('shown');
    }
};

$('#btnShowPanelists').click(function() {
    $('#panelists').removeClass('hidden');
    $('#panelists').addClass('shown');
    $('#btnShowPanelists').removeClass('shown');
    $('#btnShowPanelists').addClass('hidden');
});

$(window).scroll(function() {
    // When the user scrolls down 20px from the top of the document, show navbar
    var currentPos = $(window).scrollTop();
    if (currentPos > 400) {
        $('#nav').addClass('activated');
    } else {
        $('#nav').removeClass('activated');
    }

    $('.nav-link').each(function() {
        var sectionLink = $(this);
        // capture the height of the navbar
        var navHeight = $('#nav').outerHeight() + 1;
        var section = $(sectionLink.attr('href'));

        // subtract the navbar height from the top of the section
        if (section.position().top - navHeight <= currentPos && sectionLink.offset().top + section.height() > currentPos) {
            $('.nav-link').removeClass('active');
            sectionLink.addClass('active');
        } else {
            sectionLink.removeClass('active');
        }
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
