$(document).ready(function () { 

    // profile box clickability
    $(document).on("click", ".header__profile-icon", function() {
        $(".header__profile-icon, .header__profile-box").toggleClass("active");
        $(".header__notification-box, .header__notification-icon").removeClass("active");
    });

    // notification box clickability
    $(document).on("click", ".header__notification-icon", function() {
        $(".header__notification-icon, .header__notification-box").toggleClass("active");
        $(".header__profile-box").removeClass("active");
    });

    // notification cross clickability
    $(document).on("click", ".header__notification-cross", function() {
        $(".header__notification-cross, .header__notification-box").toggleClass("active");
        $(".header__notification-icon").removeClass("active");
    });
});

