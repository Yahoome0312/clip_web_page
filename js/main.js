document.addEventListener('DOMContentLoaded', () => {
    // Navigation Active State
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPath.split('/').pop())) {
            link.classList.add('active');
        }
    });

    // Quiz Logic
    window.checkQuiz = function(element, isCorrect, feedbackId) {
        const options = element.parentElement.querySelectorAll('.quiz-option');
        const feedback = document.getElementById(feedbackId);
        
        options.forEach(opt => opt.classList.remove('selected'));
        element.classList.add('selected');

        if (isCorrect) {
            element.classList.add('correct');
            feedback.textContent = "Correct! Good job.";
            feedback.style.color = "var(--secondary-color)";
        } else {
            element.classList.add('wrong');
            feedback.textContent = "Incorrect. Try again.";
            feedback.style.color = "#ef4444";
        }
    };

    // Simple 3D/Animation Placeholder Rotation
    const cubes = document.querySelectorAll('.animate-cube');
    cubes.forEach(cube => {
        let angle = 0;
        setInterval(() => {
            angle += 1;
            cube.style.transform = `rotateY(${angle}deg) rotateX(${angle * 0.5}deg)`;
        }, 16);
    });

    console.log("CLIP Web Page Loaded");
});
