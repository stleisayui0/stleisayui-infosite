    //we can break this down into smaller files in the future
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    //hamburger
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      hamburger.classList.toggle('active');
    });

    document.getElementById("hamburger").addEventListener("click", function () {
      document.getElementById("nav-menu").classList.toggle("show");
    });

    //booking
    const form = document.getElementById('booking-form');
    form.addEventListener('submit', function(e) {
      alert('Thank you for your request! We will get back to you soon.');
    });