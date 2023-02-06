const hamburgerContainer = document.querySelector('#main-nav');
const hamburger = document.querySelector('.main-nav-hamburger');
const links = document.querySelectorAll('.nav-links li');

// console.log(links)

hamburger.addEventListener('click', () =>{
  hamburgerContainer.classList.toggle('clicked');
  links.forEach((link) => {
    link.classList.toggle('fade');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry =>{

    if(entry.isIntersecting){
      entry.target.classList.add('animate')
    }
  });
});

observer.observe(document.querySelector('.section-title'));

const cards = document.querySelectorAll('.practices-card');
cards.forEach((card)=>{
  observer.observe(card)
})