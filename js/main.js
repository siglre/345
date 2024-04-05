// В файле main.js
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.image, .text, .text_low');
    elements.forEach(function(element) {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('show');
        }
    });
});