// Slideshow Functionality
let slideIndex = 1;
let resSlideIndex = 1;
let comSlideIndex = 1;

// Initialize the slideshow when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    showResSlides(resSlideIndex);
    showComSlides(comSlideIndex);
    
    // Auto advance slides every 5 seconds
    setInterval(function() {
        plusSlides(1);
    }, 5000);
    
    // Auto advance residential slides every 6 seconds
    setInterval(function() {
        plusResSlides(1);
    }, 6000);
    
    // Auto advance commercial slides every 7 seconds
    setInterval(function() {
        plusComSlides(1);
    }, 7000);
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a, .footer-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    // Contact section functionality can be added here if needed
});

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show the current slide and activate the corresponding dot
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Mobile menu toggle function
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.position = 'absolute';
        nav.style.top = '90px';
        nav.style.left = '0';
        nav.style.width = '100%';
        nav.style.backgroundColor = '#fff';
        nav.style.padding = '20px';
        nav.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
    }
    
    // Change nav ul to column layout on mobile
    const navUl = document.querySelector('nav ul');
    if (navUl) {
        if (nav.style.display === 'flex') {
            navUl.style.flexDirection = 'column';
            navUl.style.alignItems = 'center';
            
            // Add spacing between nav items
            const navItems = document.querySelectorAll('nav ul li');
            navItems.forEach(item => {
                item.style.margin = '10px 0';
            });
        }
    }
}

// Smooth scrolling function
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        // Close mobile menu if open
        const nav = document.querySelector('nav');
        if (window.innerWidth <= 768 && nav.style.display === 'flex') {
            toggleMobileMenu();
        }
        
        // Calculate header height for offset
        const headerHeight = document.querySelector('header').offsetHeight;
        
        window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
        });
    }
}

// Additional contact section functionality can be added here if needed

// Residential Slideshow Controls
function plusResSlides(n) {
    showResSlides(resSlideIndex += n);
}

// Residential Thumbnail image controls
function currentResSlide(n) {
    showResSlides(resSlideIndex = n);
}

function showResSlides(n) {
    let i;
    const slides = document.getElementsByClassName("residential-slide");
    const dots = document.getElementsByClassName("res-dot");
    
    if (n > slides.length) {resSlideIndex = 1}
    if (n < 1) {resSlideIndex = slides.length}
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show the current slide and activate the corresponding dot
    slides[resSlideIndex-1].style.display = "block";
    dots[resSlideIndex-1].className += " active";
}

// Commercial Slideshow Controls
function plusComSlides(n) {
    showComSlides(comSlideIndex += n);
}

// Commercial Thumbnail image controls
function currentComSlide(n) {
    showComSlides(comSlideIndex = n);
}

function showComSlides(n) {
    let i;
    const slides = document.getElementsByClassName("commercial-slide");
    const dots = document.getElementsByClassName("com-dot");
    
    if (n > slides.length) {comSlideIndex = 1}
    if (n < 1) {comSlideIndex = slides.length}
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    // Show the current slide and activate the corresponding dot
    slides[comSlideIndex-1].style.display = "block";
    dots[comSlideIndex-1].classList.add("active");
}

// Scroll event to change header style on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        header.style.padding = '10px 0';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.padding = '15px 0';
    }
});

// Resize event to handle responsive behavior
window.addEventListener('resize', function() {
    const nav = document.querySelector('nav');
    if (window.innerWidth > 768) {
        nav.style.display = 'block';
        nav.style.position = 'static';
        nav.style.padding = '0';
        nav.style.boxShadow = 'none';
        
        // Reset nav ul to row layout on desktop
        const navUl = document.querySelector('nav ul');
        if (navUl) {
            navUl.style.flexDirection = 'row';
            
            // Reset nav item margins
            const navItems = document.querySelectorAll('nav ul li');
            navItems.forEach(item => {
                item.style.margin = '0 0 0 30px';
            });
        }
    } else {
        nav.style.display = 'none';
    }
});