/*global $, jQuery, alert */
$(document).ready(function () {
    
$('#back-arrow').click(function () {
    "use strict";
    $('#work-belt').css('left', '0');
    $('.project').fadeOut();
});

$('.project-unit').click(function () {
    "use strict";
    
    var project = this.id.match(/simon|tic-tac-toe|clock|twitch|wikipedia|weather|calc|tribute/).join(),
        title = $(this).children('div').children('strong').html();
        
    $('.proj-title').html(title);
    $('#work-belt').css('left', '-100%');
    
    $('#' + project).delay(150).fadeIn();
    
    // if (project.match(/simon/))
    //     $('#simon').delay(150).fadeIn();
    // else 
    //     $('#tictactoe').delay(150).fadeIn();
});
    
});