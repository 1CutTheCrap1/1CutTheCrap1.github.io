const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const searchbutton = document.querySelector('.search-button');
  
  burger.addEventListener('click', () => {
    //toggle nav
    nav.classList.toggle('nav-active');

    //animate links 
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      }
      else {
        // link.style.animation = `navLinkFade 0.5s ease forwards $(index / 7 + 1)s`;
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
      }
    });

    //blur bg
    searchbutton.classList.toggle('bg-blur');

    //burger animation
    burger.classList.toggle('toggle')
  });
}

navSlide();