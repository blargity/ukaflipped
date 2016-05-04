$(document).ready(function() {
    $.preloadImages = function() {
        for (var i = 0; i < arguments.length; i++) {
            $("<img />").attr("src", arguments[i]);
        }
    }

    $.preloadImages("images/heads.jpg", "images/tails.jpg");
    $('h1').addClass('animated fadeInDown');

    function flipMe() {
        var flip = ["heads", "tails"];
        var side = flip[Math.floor(Math.random() * flip.length)];

        if (side == "heads") {
            $(".title").text("You Got " + side).addClass('animated pulse');
            $('h1').addClass('animated pulse');
            $(".image").html('<img class="heads" src="images/heads.jpg"/>');
            $('.heads').addClass('animated flip');
        } else {
            $(".title").text("You Got " + side);
            $('h1').addClass('animated pulse');
            $(".image").html('<img class="tails" src="images/tails.jpg"/>');
            $('.tails').addClass('animated flip');
        }
    }

    $(".flipButton").click(flipMe);
});
