
// Smooth scroll for anchors
// Function from http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
$('a').click(function(event){
  // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
});

$('.back-arrow').click(function () {
    "use strict";
    $('.work-belt').css('left', '0');
    $('.project').fadeOut();
    $('.project-unit').show();
});

$('.project-unit').click(function () {
    "use strict";

    // var project = $(this).children('div.project-thumb-container').children('div.project-thumb').className.match(/simon|tic-tac-toe|clock|twitch|wikipedia|weather|calc|tribute/).join(),
    //     title = $(this).parent.children('.overlay').children('strong').html();

    var project = $(this).children('div.project-thumb-container')
                  .children('div.project-thumb')[0]
                  .className.match(/recipe-box|simon|markdown-previewer|tic-tac-toe|clock|twitch|wikipedia|weather|calc|tribute/)
                  .join(),
        title = $(this).children('div.overlay').children('strong').html();

    $('html, body').animate({
        scrollTop: $('#projects').offset().top
    }, 800);

    $('.project-unit').delay(150).fadeOut();
    $('.proj-title').html(title);
    $('.work-belt').css('left', '-100%');

    $('.' + project).delay(150).fadeIn();
});

$('.nav-toggle').on('click', function(){
  $('.nav--ul').toggleClass('visible');
  $('.media-list').toggleClass('visible');
  $('.nav-toggle').toggleClass('fa-bars fa-close');
});

$('.nav--ul').on('click', function(){
  $('.nav--ul').removeClass('visible');
  $('.media-list').removeClass('visible');
  $('.nav-toggle').toggleClass('fa-bars fa-close');
});

// Fixed Header on scroll
//
// var hasScrolled = false,
//     nav = document.querySelector('nav'),
//     header_height = getComputedStyle(nav).height.split('px')[0];
//
// window.onscroll = scrolled;
//
// function scrolled(){
//   hasScrolled = true;
// }
//
// setInterval(function(){
//     if (hasScrolled){
//       hasScrolled = false;
//
//       if (window.pageYOffset > header_height){
//         nav.classList.add('nav-fixed');
//       }
//       else {
//         nav.classList.remove('nav-fixed');
//       }
//     }
// }, 100);
