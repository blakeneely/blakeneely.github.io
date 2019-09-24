$(document).ready(function() {
    function hideSplash(){
        $("#hero").addClass("animated zoomOut");
        setTimeout(function(){$("#hero").hide();}, 500);
    };
    function showBody(){
        $(".body").toggleClass("hidden");
        $(".body").addClass("animated zoomIn");
        setTimeout(function(){$(".body").show();}, 500)
    };
    function showContactModal(){
        $(".contact-modal").toggleClass("is-active")
    }
    $(".contact").on("click", function(){
        // event.preventDefault;
        showContactModal();
    });
    $(".contact-delete").on("click", showContactModal);
    
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
    $("#hero-button").on("click", function(){
        hideSplash();
        showBody();
    });

    

});
