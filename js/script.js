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
const banner = document.getElementById("banner");
const icon = document.getElementById("darkicon");
const light = "<i class=\"fas fa-sun\"></i> Light Mode";
const dark = "<i class=\"fas fa-moon\"></i> Dark Mode";

if (currentTheme == "dark") {
  main.classList.remove("bg-white");
  main.classList.add("bg-dark");
  main.classList.add("text-darkmode");
  icon.innerHTML = dark;
  if (banner) {
    banner.classList.remove("bg-grey");
    banner.classList.add("bg-darkgrey");
  }
}

btn.addEventListener("click", function () {
  main.classList.toggle("bg-white");
  main.classList.toggle("bg-dark");
  main.classList.toggle("text-darkmode");
  if (banner) {
    banner.classList.toggle("bg-grey");
    banner.classList.toggle("bg-darkgrey");
  }
  let theme = "light";
  if (main.classList.contains("bg-dark")) {
    theme = "dark";
    icon.innerHTML = dark;
  } else {
    icon.innerHTML = light;
  }
  localStorage.setItem("theme", theme);
});