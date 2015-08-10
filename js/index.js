$(function() {
    // Find the width of each word element
    var liWidth = $("li").css("width");
        // Reset the height of each li elements
    $("li").css("height", liWidth);
    $("li").css("lineHeight", liWidth);
    var totalHeight = $("#wordsearch").css("width");
    $("#wordsearch").css("height", totalHeight);
});

causeRepaintsOn = $("h1, h2, h3, p");

$(window).resize(function() {
    causeRepaintsOn.css("z-index", 1);
});

$(window).on('resize', function() {
  // Find the width of each word element
    var liWidth = $("li").css("width"); 

    // Reset the height of each li elements
    $("li").css("height", liWidth);
    $("li").css("lineHeight", liWidth);

    var totalHeight = $("#wordsearch").css("width");
    $("#wordsearch").css("height", totalHeight);
});

$(function() {
    /* 4 */
    $(this).delay(0).queue(function() {
        $(".subject_1").addClass("zoomed");
        $(this).dequeue();
    })

    // Loop through each element that needs to be colored darker
    // after showing the welcome message
    .delay(10000).queue(function() {
    $( "li" ).each(function( index ) {
      var el=$(this);
      setTimeout(function() { 
        //el.addClass('color-darker');
      }, index * 15); 
      if($(this).hasClass("color-darker")) {
        console.log( index + ": " + $( this ).text() );
      }
    });


  });

    // Loop through each selected elements to show words
    // welcome message gets executed first
    $( "li" ).each(function( index ) {
      if($(this).hasClass("showWords")) {
        var el=$(this);
        setTimeout(function() { 
          el.addClass('selected');
          //el[0].innerHTML = word.charAt(5);
        }, index * 150); 
      }
    });


    // .delay(500).queue(function() {
    //     $("#1").addClass("selected");
    //     //document.getElementById("1").innerHTML = "H";
    //     // document.getElemetnById() returns a DOM object, but $("#") returns a jQuery object
    //     // so we have to get the DOM object from the jQuery object by using$("#")[0]
    //     $("#1")[0].innerHTML = "H";
    //     $(this).dequeue();
    // })
});