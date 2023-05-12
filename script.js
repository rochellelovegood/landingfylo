const navhamburger=document.querySelector('.hamburger')
const navlist=document.querySelector('.list')
navhamburger.addEventListener('click', () => {
    navlist.classList.toggle('show');
  });

