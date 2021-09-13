const navBtn = document.getElementById('nav-toggle');
const navLinks = document.getElementsByClassName('nav-links');

navBtn.addEventListener('click', () => {
    navLinks[0].classList.toggle('show-links');
})
