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
    var readMoreContent = document.querySelector('.read-more-content');
    var readMoreButton = document.querySelector('.btn');

    if (readMoreContent.style.display === 'none' || readMoreContent.style.display === '') {
        readMoreContent.style.display = 'block';
        readMoreButton.textContent = 'Read Less';

        var readLessButton = document.createElement('button');
        readLessButton.textContent = 'Read Less';
        readLessButton.className = 'btn';
        readLessButton.onclick = function() {
            readMoreContent.style.display = 'none';
            readMoreButton.textContent = 'Read More'; // Change back to "Read More"
            readMoreButton.style.display = 'block'; // Ensure "Read More" button is visible
            this.remove(); // Remove the "Read Less" button when clicked
        };

        document.querySelector('.about-content').appendChild(readLessButton);

        readMoreButton.style.display = 'none'; // Hide the original "Read More" button
    } else {
        readMoreContent.style.display = 'none';
        readMoreButton.textContent = 'Read More';
        readMoreButton.style.display = 'block'; // Ensure "Read More" button is visible

        var readLessButton = document.querySelector('.btn');
        if (readLessButton) {
            readLessButton.remove(); // Remove the existing "Read Less" button if it exists
        }
    }
}




