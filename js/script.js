const texts = ["Google Ads", "Facebook Ads", "Google Analytics", "Google Tags Manager", "Performance Marketer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAndChange() {
    const currentText = texts[textIndex];
    const textElement = document.getElementById("specialist");

    // Add thick bar while typing
    let typingIndicator = '';
    if (charIndex < currentText.length) {
        typingIndicator = '<span class="typing-indicator">|</span>';
    }
    textElement.innerHTML = currentText.substring(0, charIndex) + typingIndicator;

    if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
    } else {
        isDeleting = !isDeleting;
        // Adjust the pause before deleting here (1 second)
        const pauseBeforeDelete = isDeleting ? 1000 : 0; // Add a pause of 1 second before deleting
        setTimeout(typeAndChange, pauseBeforeDelete);
        if (!isDeleting) {
            // Move to the next text
            textIndex = (textIndex + 1) % texts.length;
        }
        return;
    }
    const typingSpeed = 100; // Adjust typing speed here (100 milliseconds)
    setTimeout(typeAndChange, typingSpeed);
}

// Start typing and changing text on window load
window.onload = function() {
    typeAndChange();
};
