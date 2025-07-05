document.addEventListener('DOMContentLoaded', function() {
    var bio = document.querySelector('.bio');
    function revealBioOnScroll() {
    if (!bio) return;
    var rect = bio.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    if (rect.top < windowHeight - 60) {
        bio.classList.add('revealed');
        window.removeEventListener('scroll', revealBioOnScroll);
    }
    }
    window.addEventListener('scroll', revealBioOnScroll);
    revealBioOnScroll();
});

// Dropdown nav for mobile
document.addEventListener('DOMContentLoaded', function() {
    var navToggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });
    // Optional: close dropdown when a link is clicked (mobile UX)
    navLinks.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
        navLinks.classList.remove('open');
        });
    });
    }
});