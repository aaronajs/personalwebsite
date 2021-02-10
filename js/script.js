// change hamburger icon on click - need to make more efficient
$(document).on('click', 'button[id="navicon"]', function() {
  var icon = document.getElementById('navicon');
  icon.classList.toggle("is-active")
})

$(document).on('click', 'a[href^="#"]', function(e) {
  var id = $(this).attr('href')
  var $id = $(id)
  if ($id.length === 0) return
  e.preventDefault()
  var position = $id.offset().top
  $('body, html').animate({scrollTop: position})
});

$('body').scrollspy({ target: '#resumebar' })

const btn = document.querySelector(".darkmodeToggle");
const currentTheme = localStorage.getItem("theme");
const main = document.getElementById("main");

if (currentTheme == "dark") {
  main.classList.remove("bg-white");
  main.classList.add("bg-dark");
  main.classList.add("text-darkmode");
}

btn.addEventListener("click", function () {
  main.classList.toggle("bg-white");
  main.classList.toggle("bg-dark");
  main.classList.toggle("text-darkmode");
  let theme = "light";
  if (main.classList.contains("bg-dark")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});