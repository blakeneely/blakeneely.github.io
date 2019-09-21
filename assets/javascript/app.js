$(document).ready(function() {
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    $("#hero-button").on("click", function(){
        hideSplash();
        showBody();
    });

    function hideSplash(){
        $(".hero").addClass("animated zoomOut");
        setTimeout(function(){$(".hero").hide();}, 500);
    };
    function showBody(){
        $(".body").addClass("animated zoomIn");
        setTimeout(function(){$(".body").show();}, 500)
    };
    

});
