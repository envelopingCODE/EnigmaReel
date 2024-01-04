"use strict"; 

document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.getElementById('progress-bar');

    function updateProgressBar() {
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

        progressBar.style.width = `${scrollPercentage}%`;
    }

    window.addEventListener('scroll', updateProgressBar);
});

document.addEventListener("DOMContentLoaded", function() {
    const returnToTopButton = document.getElementById('return-to-top');
    const scrollModeSlider = document.getElementById('scrollModeSlider');
    const scrollModeText = document.getElementById('scrollModeText');

    // Show/hide the button based on the scroll position
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            returnToTopButton.style.display = 'block';

            // Check scroll amount to display the slider
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 100) {
                scrollModeSlider.style.display = 'block';
                scrollModeText.style.display = 'block';
            } else {
                scrollModeSlider.style.display = 'none';
                scrollModeText.style.display = 'none';
            }
        } else {
            returnToTopButton.style.display = 'none';
            scrollModeSlider.style.display = 'none';
            scrollModeText.style.display = 'none';
        }
    };

    // Scroll to the top when the button is clicked
    returnToTopButton.onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };

    // Change scroll mode based on slider value
    scrollModeSlider.oninput = function() {
        if (this.value == 0) {
            // Snap Scroll
            document.body.style.scrollSnapType = '';
            document.documentElement.style.scrollSnapType = 'proximity';
            scrollModeText.innerText = 'Snap Scroll';
        } else {
            // Smooth Scroll
            document.body.style.scrollSnapType = 'none';
            document.documentElement.style.scrollSnapType = 'none';
            scrollModeText.innerText = 'Normal Scroll';
        }
    };
});

function changeVideoSource() {
    const slider = document.getElementById('sourceSlider');
    const iframe = document.getElementById('trailerIframe');

    // Define your video sources
    const youtubeSource = 'https://www.youtube-nocookie.com/embed/YdxCnCvCngk?si=_j46mybAffWRFwNs';
    const pipedSource = 'https://iv.ggtyler.dev/embed/YdxCnCvCngk';

    // Update the iframe source based on the slider value
    if (slider.value == 0) {
        iframe.src = youtubeSource;
    } else {
        iframe.src = pipedSource;
    }}