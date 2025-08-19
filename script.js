const menuIcon = document.querySelector('#menu-icon');
const navbar = document.getElementById('navbar');

let isNavbarVisible = true;

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active'); 

    if (isNavbarVisible) {
        console.log('LOG');
        navbar.style.display = 'none';
        isNavbarVisible = false;
    } else {
        console.log('LOG 2');
        navbar.style.display = 'block';
        isNavbarVisible = true;
    }
};


function toggleReadMore() {
    const readMoreContent = document.querySelector('.read-more-content');
    const readMoreButton = document.querySelector('.about-btn');

    if (readMoreContent.style.display === 'none' || readMoreContent.style.display === '') {
        readMoreContent.style.display = 'block';
        readMoreButton.textContent = 'Read Less';
    } else {
        readMoreContent.style.display = 'none';
        readMoreButton.textContent = 'Read More';
    }
}























// Select the skills section
const skillsSection = document.querySelector('.skills-bar');
const progressSpans = document.querySelectorAll('.progress-line span');

// Function to add animation when section is in view (progress bar fills up)
const animateSkills = () => {
    progressSpans.forEach(span => {
        const progressWidth = getComputedStyle(span).getPropertyValue('--progress-width');
        span.style.width = progressWidth;
    });
};

// Function to reset progress bar to 0% (progress bar empties)
const resetSkills = () => {
    progressSpans.forEach(span => {
        span.style.width = '0%'; // Reset width to 0%
    });
};

// Create an Intersection Observer for both in-view and out-of-view animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();  // Fill progress bars when section enters the view
        } else {
            resetSkills();  // Reset progress bars when section leaves the view
        }
    });
}, { threshold: 0.5 }); // Triggers when 50% of the section is visible

// Start observing the skills section
observer.observe(skillsSection);
