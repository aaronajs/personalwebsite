//fade in and out back to top button
$(document).on("scroll", function () {
  var btn = document.getElementById('totop');
  if (window.pageYOffset > 500) $(btn).addClass("btnvis")
  else $(btn).removeClass("btnvis")
})

// change hamburger icon on click - need to make more efficient
$(document).on('click', 'button[id="navicon"]', function() {
  var icon = document.getElementById('navicon');
  icon.classList.toggle("is-active")
})

//animated slide code. Original from Valentin Sarychev, I made some slight modifications to accommodate my needs.
// $(document).on('click', 'a[href^="#"]', function(e) {
//   var id = $(this).attr('href')
//   var $id = $(id)
//   if ($id.length === 0) return
//   e.preventDefault()
//   var position = $id.offset().top - 40
//   if (id === '#studentforum2018' || id === '#projectmanager2018') position -= 60
//   if (!id.includes('year')) $('body, html').animate({scrollTop: position})
// })
