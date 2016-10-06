//
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
//closes open hamburger menus when you click outside the menu
$('body').bind('click', function(e) {
    if($(e.target).closest('.navbar').length == 0) {
        // click happened outside of .navbar, so hide
        var opened = $('.navbar-collapse').hasClass('collapse in');
        if ( opened === true ) {
            $('.navbar-collapse').collapse('hide');
        }
    }
});
//dynamically changes event tab paragraph size so ellipses look good
var eventText = $('.eventText');
$( window ).bind('resize', function(){
    var width = $('.eventItem').width();
    eventText.width( width - 175 );
});

eventText.width( $('.eventItem').width() - 175 );
