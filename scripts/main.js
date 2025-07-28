    //we can break this down into smaller files in the future
    
    //carousel 
    let currentSlide = 0;
    const track = document.getElementById("carousel-track");
    const slides = track.children;
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    let startX = 0;
    let isSwiping = false;
  
    function moveSlide(step) {
      currentSlide = (currentSlide + step + slides.length) % slides.length;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isSwiping = true;
    });
    
    track.addEventListener('touchmove', (e) => {
      if (!isSwiping) return;
      const moveX = e.touches[0].clientX;
      const diff = startX - moveX;
    
      // Swipe left
      if (diff > 50) {
        nextBtn.click();
        isSwiping = false;
      }
    
      // Swipe right
      if (diff < -50) {
        prevBtn.click();
        isSwiping = false;
      }
    });
    
    track.addEventListener('touchend', () => {
      isSwiping = false;
    });
    
    //hamburger
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      hamburger.classList.toggle('active');
    });

    //document.getElementById("hamburger").addEventListener("click", function () {
      //document.getElementById("nav-menu").classList.toggle("show");
    //});

    //booking
    const form = document.getElementById('booking-form');
    form.addEventListener('submit', function(e) {
      alert('Thank you for your request! We will get back to you soon.');
    });
    
