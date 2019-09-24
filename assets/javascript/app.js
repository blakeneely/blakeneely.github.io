$(document).ready(function() {
    function hideSplash(){
        $("#hero").addClass("animated zoomOut");
        setTimeout(function(){$("#hero").hide();}, 500);
    };
    function showBody(){
        $(".body").toggleClass("hidden");
        $(".body").addClass("animated zoomIn slow");
        setTimeout(function(){$(".body").show();}, 500)
    };
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
    $("#hero-button").on("click", function(){
        hideSplash();
        showBody();
    });

    

});
