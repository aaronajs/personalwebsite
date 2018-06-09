//animated slide code from Valentin Sarychev
$(document).on('click', 'a[href^="#"]', function(e) {
  var id = $(this).attr('href')
  var $id = $(id)
  if ($id.length === 0) return
  e.preventDefault()
  var position = $id.offset().top
  $('body, html').animate({scrollTop: position})
});

//fade in and out back to top button
$(document).on("scroll", function () {
  var btn = document.getElementById('totop');
  if (window.pageYOffset > 500) {
    $(btn).addClass("btnvis")
  } else {
    $(btn).removeClass("btnvis")
  }
})
