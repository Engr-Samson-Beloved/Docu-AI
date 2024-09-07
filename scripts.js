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
// window.onload = function() {
//     setTimeout(function() {
//         const popup = document.getElementById('author-popup');
//         if (popup) {
//             popup.style.display = 'flex';
//         }
//     }, 5000);
// };

// function closePopup() {
//     const popup = document.getElementById('author-popup');
//     if (popup) {
//         popup.style.display = 'none';
//     }
// }
// Existing code
// window.onload = function() {
//     const modal = document.getElementById('feature-modal');
//     const closeButtons = document.querySelectorAll('.close');
    
//     closeButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             closeModal();
//         });
//     });

//     window.onclick = function(event) {
//         if (event.target === modal) {
//             closeModal();
//         }
//     };
// };

// Function to handle feature clicks and load external content
// function handleFeatureClick(featureName) {
//     const featurePages = {
//         "Writing Assistance": "write.html",
//         "Summarization": "search.html",
//         "Translation": "translation.html",
//         "Data Extraction": "data-extraction.html",
//         "Formatting": "format.html"
//     };

//     // Update the modal title with the feature name
//     document.getElementById('modal-title').innerText = featureName;

//     // Load the specific feature page into the iframe
//     document.getElementById('feature-frame').src = featurePages[featureName];

//     // Show the modal
//     document.getElementById('feature-modal').style.display = 'flex';
// }

// // Function to close the modal
// function closeModal() {
//     document.getElementById('feature-modal').style.display = 'none';
// }

// // Function to open the Summarization Feature modal
// function openSummarizationFeature() {
//     const modal = document.getElementById('summarization-feature');
//     if (modal) {
//         modal.style.display = 'flex';
//     }
// }

// // Function to close modals
// function closeFeatureModal(modalId) {
//     const modal = document.getElementById(modalId);
//     if (modal) {
//         modal.style.display = 'none';
//     }
// }

// function closeModal() {
//     document.getElementById('feature-modal').style.display = 'none';
// }



// // Function to close modals
// function closeFeatureModal(modalId) {
//     const modal = document.getElementById(modalId);
//     if (modal) {
//         modal.style.display = 'none';
//     }
// }

// Summarization API Integration
// Function to handle the Summarization API request
document.getElementById('summarization-form').addEventListener('submit', async function(event) {
    event.preventDefault();  // Prevent the form from submitting the usual way

    const inputText = document.getElementById('summarize-input').value;
    
    if (!inputText.trim()) {
        alert("Please enter text to summarize.");
        return;
    }

    // Show loading message
    document.getElementById('summary-result').innerText = "Summarizing...";

    try {
        // API call to Hugging Face
        const response = await fetch('https://api-inference.huggingface.co/models/facebook/bart-large-cnn', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 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',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inputs: inputText
            })
        });

        // Handle response
        const result = await response.json();
        
        if (response.ok && result[0]?.summary_text) {
            // Output the summary
            document.getElementById('summary-result').innerText = result[0].summary_text;
        } else {
            // Display error message
            throw new Error(result.error || "An error occurred during summarization.");
        }
    } catch (error) {
        // Handle errors (network or API errors)
        console.error('Error:', error);
        document.getElementById('summary-result').innerText = "Could not summarize the text. Please try again.";
    }
});



// Show the selected feature's popup
let currentPopup = null;

function showFeature(featureId) {
    // Hide all popups
    const popups = document.querySelectorAll('.feature-popup');
    popups.forEach(popup => popup.style.display = 'none');
    
    // Show the selected popup
    currentPopup = document.getElementById(featureId);
    if (currentPopup) {
        currentPopup.style.display = 'block';
    }

    // Add event listener to close the popup when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = currentPopup.contains(event.target) || event.target.closest('.feature-item');
        if (!isClickInside) {
            currentPopup.style.display = 'none';
            currentPopup = null;
        }
    });
}






