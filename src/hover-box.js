$(function() {
    var mobileScreenTreshold = 1024;
    $(".hoverbox").click(function(e) {
        if($(window).width() <= mobileScreenTreshold) {
            if($(this).hasClass("active")) {
                $(this).removeClass("active");
            } else {
                e.preventDefault();
                $(this).addClass("active");
            }
        } else {
            $(this).removeClass("active");
        }
    });
});
