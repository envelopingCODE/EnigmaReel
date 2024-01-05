"use strict"; 


// Progress bar

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

// Event Listener for Return to Top button

document.addEventListener("DOMContentLoaded", function() {
    const returnToTopButton = document.getElementById('return-to-top');
    const scrollModeSlider = document.getElementById('scrollModeSlider');
    const scrollModeText = document.getElementById('scrollModeText');

    // Show or hide the button based on the scroll position
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            returnToTopButton.style.display = 'block';

           
        } else {
            returnToTopButton.style.display = 'none';
           
        }
    };

    // Scroll to the top when the "return to top" button is clicked

    returnToTopButton.onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };

    // Change scroll mode based on slider value

    scrollModeSlider.oninput = function() {
        if (this.value == 0) {
        
            document.body.style.scrollSnapType = 'proximity';                        // Snap Scroll
            document.documentElement.style.scrollSnapType = 'proximity'; 
            
               scrollModeText.innerText = 'Snap Scroll';                              // Display text to notify user of changed setting
        } else {
            
            document.body.style.scrollSnapType = 'none';                       // Normal Scroll
            document.documentElement.style.scrollSnapType = 'none'
            scrollModeText.innerText = 'Normal Scroll';                      // Display text 
        }
    };
});

// Allow the user to change source from youtube to a more privacy respecting frontend invidious (see Github https://github.com/iv-org/invidious)

function changeVideoSource() {
    const slider = document.getElementById('sourceSlider');
    const iframeFrances = document.getElementById('trailerFrances');
    const iframeCoffee = document.getElementById('trailerCoffee');
    const iframeMenu = document.getElementById('trailerMenu');
    const iframeWorst = document.getElementById('trailerWorst');
    const iframeTar = document.getElementById('trailerTar');


    // Defining video sources

    const youtubeSourceFrances = "https://www.youtube-nocookie.com/embed/YdxCnCvCngk?si=_j46mybAffWRFwNs";  // Frances Ha trailer Sources
    const privatefrontendSourceFrances = "https://iv.ggtyler.dev/embed/YdxCnCvCngk";

    const youtubeSourceCoffee = "https://www.youtube-nocookie.com/embed/Gl5_tWU6Kf8?si=4M5v6AtERTmkNsRV"  // Coffee in Berlin trailer Sources
    const privateFrontEndSourceCoffee = "https://youtube.owacon.moe/embed/Gl5_tWU6Kf8";
 
    const youtubeSourceMenu = "https://www.youtube-nocookie.com/embed/C_uTkUGcHv4?autoplay=0";           // The Menu Trailer Sources
    const privateFrontEndSourceMenu = "https://youtube.owacon.moe/embed/C_uTkUGcHv4";

    const youtubeSourceWorst = "https://www.youtube-nocookie.com/embed/IWIF_gAFIKY?autoplay=0" ;           //  The worst person [..] Trailer Sources
    const privateFrontEndSourceWorst = "https://youtube.owacon.moe/embed/IWIF_gAFIKY";

    const youtubeSourceTar = "https://www.youtube-nocookie.com/embed/Na6gA1RehsU?autoplay=0" ;           //  Tar Trailer Sources
    const privateFrontEndSourceTar = "https://youtube.owacon.moe/embed/Na6gA1RehsU";


    // Update the iframe source based on the slider value
    if (slider.value == 0) {
        iframeFrances.src = youtubeSourceFrances;
        iframeCoffee.src = youtubeSourceCoffee;
        iframeMenu.src = youtubeSourceMenu;
        iframeWorst.src = youtubeSourceWorst;
        iframeTar.src = youtubeSourceTar;


    } else {
        iframeFrances.src = privatefrontendSourceFrances;
        iframeCoffee.src =  privateFrontEndSourceCoffee;
        iframeMenu.src = privateFrontEndSourceMenu;
        iframeWorst.src = privateFrontEndSourceWorst;
        iframeTar.src = privateFrontEndSourceTar;
    }}