document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".habit");
    const progressMsg = document.getElementById("progressMsg");

    // Load saved progress
    checkboxes.forEach((box) => {
        const checked = localStorage.getItem(box.value) === "true";
        box.checked = checked;
    });

    updateProgress();

    // Save progress on change
    checkboxes.forEach((box) => {
        box.addEventListener("change", () => {
            localStorage.setItem(box.value, box.checked);
            updateProgress();
        });
    });

    function updateProgress() {
        const total = checkboxes.length;
        const completed = Array.from(checkboxes).filter(c => c.checked).length;
        progressMsg.textContent = `You have completed ${completed} of ${total} habits today.`;

        const percentage = (completed / total) * 100;
        document.getElementById("progressFill").style.width = percentage + "%";
    }
});

// Motivational messages cycling on button click
const messages = [
    "Stay strong 💪",
    "One habit at a time!",
    "Keep the streak alive 🌟",
    "You're doing great!",
    "Hydration = energy 💧"
];
let currentIndex = 0;

function showMotivation() {
    alert(messages[currentIndex]);
    currentIndex = (currentIndex + 1) % messages.length;
}

// Theme toggle (optional)
function toggleTheme() {
    document.body.classList.toggle("dark");
}
