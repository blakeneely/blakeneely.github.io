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
        $(".contact-modal").toggleClass("is-active");
        $(".html").toggleClass("is-clipped");
    };
    function showHuddleModal(){
        $(".huddle-modal").toggleClass("is-active");
        $(".html").toggleClass("is-clipped");
    }
    function showGiftasticModal(){
        $(".giftastic-modal").toggleClass("is-active");
        $(".html").toggleClass("is-clipped");
    }
    function showTrainModal(){
        $(".train-modal").toggleClass("is-active");
        $(".html").toggleClass("is-clipped");
    }
    function showCrystalModal(){
        $(".crystal-modal").toggleClass("is-active");
        $(".html").toggleClass("is-clipped");
    }
    function showResume(){
        $(".resume-modal").toggleClass("is-active");
        $(".html").toggleClass("is-clipped");
    }
    // Modal Event Listeners
    $("#giftastic-image").on("click", showGiftasticModal);
    $(".giftastic-delete").on("click", showGiftasticModal);

    $("#train-image").on("click", showTrainModal);
    $(".train-delete").on("click", showTrainModal);

    $("#crystal-image").on("click", showCrystalModal);
    $(".crystal-delete").on("click", showCrystalModal);


    $("#huddle-image").on("click", showHuddleModal);
    $(".huddle-delete").on("click", showHuddleModal);

    $(".contact").on("click", showContactModal);
    $(".contact-delete").on("click", showContactModal);

    $(".resume").on("click", showResume);
    $(".resume-delete").on("click", showResume);

    // Navbar Event Listener
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    // Hero Event Listener
    $("#hero-button").on("click", function(){
        hideSplash();
        showBody();
    });

    

});
