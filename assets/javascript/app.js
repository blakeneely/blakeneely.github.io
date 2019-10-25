$(document).ready(function() {

    var firebaseConfig = {
        apiKey: "AIzaSyCxUCsWBLNy_0bQiExP7IljhAfl8621h7s",
        authDomain: "portfolio-6f94d.firebaseapp.com",
        databaseURL: "https://portfolio-6f94d.firebaseio.com",
        projectId: "portfolio-6f94d",
        storageBucket: "",
        messagingSenderId: "727966976436",
        appId: "1:727966976436:web:360c02fe7738df68e84ae1",
        measurementId: "G-52VR5LN7XG"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        var database = firebase.database();

    function saveContact(){
        event.preventDefault();
        var name = $('#name-input').val().trim();
        var email = $('#email-input').val().trim();
        var message = $('#message-input').val().trim();
        if ($('#name-input').val() === "" || $('#email-input').val() === "" || $('#message-input').val() === "") {
            return false;
        }
        else {
            var newContact = {
            name: name,
            email: email,
            message: message,
            };
            database.ref().push(newContact);
            $(".thanks-modal").toggleClass("is-active");
        };
        $('#name-input').val("");
        $('#email-input').val("");
        $('#message-input').val("");
        };

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
    function showFriendFinderModal(){
        $(".friendFinder-modal").toggleClass("is-active");
        $(".html").toggleClass("is-clipped");
    };
    function showHuddleModal(){
        $(".huddle-modal").toggleClass("is-active");
        $(".html").toggleClass("is-clipped");
    };
    function showGiftasticModal(){
        $(".giftastic-modal").toggleClass("is-active");
        $(".html").toggleClass("is-clipped");
    };
    function showTrainModal(){
        $(".train-modal").toggleClass("is-active");
        $(".html").toggleClass("is-clipped");
    };
    function showCrystalModal(){
        $(".crystal-modal").toggleClass("is-active");
        $(".html").toggleClass("is-clipped");
    };
    function showResume(){
        $(".resume-modal").toggleClass("is-active");
        $(".html").toggleClass("is-clipped");
    };
    // Contact Form Event Listener 
    $(document).on('click', '#contact-submit', function(){
        saveContact();
        showContactModal();
    });
    $(document).on("click", ".thanks-delete", function(){
        $(".thanks-modal").toggleClass("is-active");
    });

    // Modal Event Listeners
    $("#friendFinder-image").on("click", showFriendFinderModal);
    $(".friendFinder-delete").on("click", showFriendFinderModal);

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
