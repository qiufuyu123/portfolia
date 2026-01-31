// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 60; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active navigation item on scroll
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--link-color)';
        }
    });
});

// Image Modal - Click to enlarge
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.modal-close');

// Add click event to all clickable images
document.querySelectorAll('.clickable-image').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
});

// Close modal when clicking the X button
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Re-enable scrolling
});

// Close modal when clicking outside the image
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
});
