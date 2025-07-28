    //we can break this down into smaller files in the future
    
    //carousel 
    let currentSlide = 0;
    const track = document.getElementById("carousel-track");
    const slides = track.children;
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    function moveSlide(step) {
      currentSlide = (currentSlide + step + slides.length) % slides.length;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    //nav and hamburger
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    document.getElementById("hamburger").addEventListener("click", function () {
      document.getElementById("nav-menu").classList.toggle("show");
    });

    //book us
    const form = document.getElementById('booking-form');
    form.addEventListener('submit', function(e) {
      alert('Thank you for your request! We will get back to you soon.');
    });