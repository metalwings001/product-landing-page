let accordions = document.getElementsByClassName("questions-title")

for(let i = 0; i < accordions.length; ++i) {
  accordions[i].addEventListener('click', function() {
    panel = this.nextElementSibling
    if(panel.style.display === 'block') {
      panel.style.display = "none";
    }
    else{
      panel.style.display = 'block'
    }
  })
}

let hamburgerMenu = document.querySelector(".hamburger-lines")
navResonsiveLayout = document.querySelector(".nav-responsive-layout")

hamburgerMenu.addEventListener('click', function() {
  hamburgerMenu.classList.toggle("active")
  navResonsiveLayout.classList.toggle("active")
})



