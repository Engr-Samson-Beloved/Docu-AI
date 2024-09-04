document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav ul');
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '&#9776;'; // Unicode character for the hamburger menu

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    document.querySelector('header').appendChild(navToggle);

    // Modal functionality
    const signInButton = document.querySelector('.sign-in');
    const signUpButton = document.querySelector('.sign-up');
    const signInModal = document.getElementById('signin-modal');
    const signUpModal = document.getElementById('signup-modal');

    signInButton.addEventListener('click', () => {
        signInModal.style.display = 'block';
    });

    signUpButton.addEventListener('click', () => {
        signUpModal.style.display = 'block';
    });

    window.onclick = (event) => {
        if (event.target === signInModal) {
            signInModal.style.display = 'none';
        }
        if (event.target === signUpModal) {
            signUpModal.style.display = 'none';
        }
    };
});

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Popup message functionality
window.onload = function() {
    setTimeout(function() {
        const popup = document.getElementById('author-popup');
        if (popup) {
            popup.style.display = 'flex';
        }
    }, 5000);
};

function closePopup() {
    const popup = document.getElementById('author-popup');
    if (popup) {
        popup.style.display = 'none';
    }
}
function handleFeatureClick(featureName) {
    window.location.href = "search.html"
    // alert("You clicked on " + featureName + "!");
    // Implement further functionality here
    
}

