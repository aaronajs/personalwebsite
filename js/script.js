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
const icon = document.getElementById("darkicon");

if (currentTheme == "dark") {
  main.classList.remove("bg-white");
  main.classList.add("bg-dark");
  main.classList.add("text-darkmode");
  icon.innerHTML = "<i class=\"fas fa-moon\"></i> Dark Mode";
}

btn.addEventListener("click", function () {
  main.classList.toggle("bg-white");
  main.classList.toggle("bg-dark");
  main.classList.toggle("text-darkmode");
  let theme = "light";
  if (main.classList.contains("bg-dark")) {
    theme = "dark";
    icon.innerHTML = "<i class=\"fas fa-moon\"></i> Dark Mode";
  } else {
    icon.innerHTML = "<i class=\"far fa-moon\"></i> Light Mode";
  }
  localStorage.setItem("theme", theme);
});