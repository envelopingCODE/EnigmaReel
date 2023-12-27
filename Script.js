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