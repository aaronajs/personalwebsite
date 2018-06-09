//fade in and out back to top button
$(document).on("scroll", function () {
  var btn = document.getElementById('totop');
  if (window.pageYOffset > 500) {
    $(btn).addClass("btnvis")
  } else {
    $(btn).removeClass("btnvis")
  }
})

// change hamburger icon on click - need to make more efficient
$(document).on('click', 'button[id="navicon"]', function() {
  var icon = document.getElementById('navicon');
  icon.classList.toggle("is-active")
})

// stick secondary navbar to top of pageYOffset
window.onscroll = function() {stick()}
var sub = document.getElementById("subnavbar")
function stick() {
  if (window.pageYOffset >= sub.offsetTop) {
    sub.classList.add("sticky-top")
  } else sub.classList.remove("sticky-top")
}

//animated slide code from Valentin Sarychev
$(document).on('click', 'a[href^="#"]', function(e) {
  var id = $(this).attr('href')
  var $id = $(id)
  if ($id.length === 0) return
  e.preventDefault()
  var position = $id.offset().top
  $('body, html').animate({scrollTop: position})
})
