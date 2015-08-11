/* ========================================================================*/
/* ======================= By: Chenxing Ouyang  ===========================*/
/* ========================================================================*/


$(document).ready(function() {

    //slowly fade out loading image when the website loads
    $(window).load(function() {
        $('.doc-loader').fadeOut('slow');
    });

    // causeRepaintsOn = $("h1, h2, h3, p");
    // $(window).resize(function() {
    //     causeRepaintsOn.css("z-index", 1);
    // });
    $(resizeElements());

    $(window).on('resize', function() {
        resizeElements();
    });

    $(IntroductionAnimation01());

    // If user press "enter" on search bar
    $(".input-search").keyup(function(e) {
        if ($(".input-search:focus") && (e.keyCode == 13)) {
            // var yPosition = $(window).scrollTop(); //your current y position on the page
            // $(window).scrollTop(800);
            $("#boardLayout").fadeOut(1000, function() {
                $(this).remove();
            });
            $(IntroductionAnimation02());

            // Change #Projects position to be absolute then add top margin
            $("#Projects").css("position", absolute);
        }
    });

    // // Use Navi buttons to search for tags
    // $('.input-search').val("Game");
    $("#Apps").click(function() {
        // $(window).scrollTop(800);
    });

    // Scroll to the top
    $("a[href='#top']").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    // Scroll down to bottom
    $("a[href='#bottom']").click(function() {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, "slow");
        return false;
    });
});