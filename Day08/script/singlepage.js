$(window).scroll(function () {

    masthead = $('.masterHead').offset().top;
    about = $('#about').offset().top-250;
    portfolio = $('#portfolio').offset().top-75;
    signup = $("#signup").offset().top-100;

    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll < about) {
        $('#menu_about').removeClass('active');
    }
    else if (scroll >= about && scroll < portfolio) {
        $('#menu_about').addClass('active');
        $('#menu_portfolio').removeClass('active');
        $('#menu_signup').removeClass('active');
    }
    else if (scroll >= portfolio && scroll < signup) {
        $('#menu_portfolio').addClass('active');
        $('#menu_signup').removeClass('active');
        $('#menu_about').removeClass('active');
    }
    else if (scroll >= signup) {
        $('#menu_signup').addClass('active');
        $('#menu_portfolio').removeClass('active');
        $('#menu_about').removeClass('active');
    }
});