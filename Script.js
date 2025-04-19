AOS.init({
    duration: 1000,
    once: true,
});

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
            nav.classList.remove("show");
        }
    });
});

// EmailJS Init
(function () {
    emailjs.init("pFkhcgABpg8mldMeV");
})();

const form = document.getElementById("contact-form");
const statusText = document.getElementById("form-status");
const timeInput = document.getElementById("current-time");

function getFormattedTime() {
    const now = new Date();
    return now.toLocaleString();
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    statusText.textContent = "Sending...";
    timeInput.value = getFormattedTime();

    emailjs.sendForm("service_810fp27", "template_v9l5tng", this)
        .then(() => {
            statusText.textContent = "✅ Message sent successfully!";
            statusText.style.color = "green";
            form.reset();
        }, (err) => {
            statusText.textContent = "❌ Failed to send. Please try again.";
            statusText.style.color = "red";
            console.error("EmailJS Error:", err);
        });
});
