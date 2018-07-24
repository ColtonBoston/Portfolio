var tl = new TimelineLite()
    controller = new ScrollMagic.Controller(),
    header = document.querySelector(".header-main"),
    nameSection = document.querySelector(".name-content")
    scroll = new SmoothScroll('a[href*="#"]');

// GSAP


window.onload = function() {
  var delay = 0.2;
  tl.to(".section-name", 0.5, {opacity: 1}, 0)
    .add("second", 0.5)
    .from(".self-img", 0.3, {y: 50}, "second")
    .to(".self-img", 0.3, {opacity: 1}, "second")
    .from(".name-content h1", 0.3, {y: 50, x: 20}, "second")
    .to(".name-content h1", 0.3, {opacity: 1}, "second")
    .from(".name-content h3", 0.3, {y: 50, x: 20}, "second+=" + delay)
    .to(".name-content h3", 0.3, {opacity: 1}, "second+=" + delay)
    .from(".name-content .btn", 0.3, {y: 50, x: 20}, "second+=" + (delay+=0.3))
    .to(".name-content .btn", 0.3, {opacity: 1}, "second+=" + delay)
    .from(".header-main", 0.3, {x: "-100%"}, "second+=" + delay)
    .to(".header-main", 0.3, {opacity: 1}, "second+=" + delay);
}

// End - GSAP

// ScrollMagic

// var scene = new ScrollMagic.Scene({
//   triggerElement: "#home",
//   duration: "90%"
// })
// .addIndicators({
//   name: "fade-scene",
//   colorTrigger: "black",
//   colorStart: "#75C695"
// });
//
// controller.addScene(scene);
// End - ScrollMagic

// Prevent mobile browsers from changing height of header when navbar causes window height to change
if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i) ) {
   var header = document.querySelector(".header-main");
   header.style.height = window.innerHeight + "px";
 }

// Header toggle for smaller devices
var headerToggle = document.querySelector("#header-toggle"),
    isHeaderVisible = false;
headerToggle.addEventListener("click", function(e){
  this.classList.toggle("header-toggle-close");
  this.innerHTML = isHeaderVisible ? "<i class='fas fa-bars'></i>" : "<i class='fas fa-times'></i>";
  header.classList.toggle("header-visible");
  isHeaderVisible = !isHeaderVisible;
});
var localNavLinks = document.querySelectorAll("header a"),
    numNavLinks = localNavLinks.length;
for (var i = 0; i < numNavLinks; i++){
  localNavLinks[i].addEventListener("click", function(e){
    header.classList.remove("header-visible");
    headerToggle.innerHTML = "<i class='fas fa-bars'></i>";
    headerToggle.classList.remove("header-toggle-close");
    isHeaderVisible = false;
  });
}
// End - Header toggle for smaller devices

// Copy email on click
var email = document.querySelector(".email-copy"),
    tooltip = document.querySelector(".copy-tooltip");
email.addEventListener("click", function(e){
  tooltip.innerHTML = "<i class='fas fa-check'></i> Copied</span>";
  window.getSelection().selectAllChildren(document.querySelector("#email-text"));
  document.execCommand("Copy");
  //window.getSelection().empty();
  window.getSelection().removeAllRanges();
});
email.addEventListener("mouseout", function(e){
  tooltip.innerHTML = "<i class='fas fa-clipboard'></i> Copy to clipboard</span>";
});
// End - Email section

// Contact form
var contactFormControls = document.querySelectorAll(".contact-form-control"),
    numFormControls = contactFormControls.length;
// Add focus/blur listeners to each contact form control
for (var i = 0; i < numFormControls; i++){
  addContactFormListener(contactFormControls[i]);
}
function addContactFormListener(control){
  var label = document.querySelector("label[for='#" + control.id + "']");
  // Initialize label location (for when page is refreshed with input already in a form-control)
  if (control.value !== ""){
    label.style.transform = "translateY(15px)";
  }
  control.addEventListener("focus", function(e){
    label.style.transform = "translateY(15px)";
    label.style.color = "#e61924";
  });
  control.addEventListener("blur", function(e){
    if (control.value === "") {
      label.style.transform = "translateY(46px)";
    }
    label.style.color = "#242424";
  });
}
// End - Contact form
