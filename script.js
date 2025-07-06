window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'blue'; // changed from black to blue
  } else {
    navbar.style.backgroundColor = '#333';
  }
});
