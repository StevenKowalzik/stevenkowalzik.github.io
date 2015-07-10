$(document).ready(function() {
    $('h3').hide();

    $('.photography').mouseover(function(){
    	$('h3').fadeIn('fast');
    });

    $('.photography').mouseleave(function(){
    	$('h3').fadeOut('fast');
    })
});