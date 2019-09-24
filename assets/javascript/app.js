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
    };
    function showHuddleModal(){
        $(".huddle-modal").toggleClass("is-active");
    }
    function showGiftasticModal(){
        $(".giftastic-modal").toggleClass("is-active");
    }
    function showTrainModal(){
        $(".train-modal").toggleClass("is-active");
    }
    function showCrystalModal(){
        $(".crystal-modal").toggleClass("is-active");
    }
    function showResume(){
        $(".resume-modal").toggleClass("is-active");
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
