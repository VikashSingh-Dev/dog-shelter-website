// Sticky navbar on scroll
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    if (nav) {
        nav.classList.toggle("sticky", window.scrollY > 0);
    }
});

// Show contact popup manually (if needed)
function showPopup() {
    const popup = document.getElementById("successPopup");
    if (popup) {
        popup.style.display = "flex";
    }
}

// Submit contact form and show success message
function submitContactForm() {
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields!");
        return;
    }

    // Show success popup
    document.getElementById("successPopup").style.display = "flex";

    // Clear form fields
    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactMessage").value = "";

    // Auto-hide popup after 3 seconds
    setTimeout(() => {
        document.getElementById("successPopup").style.display = "none";
    }, 3000);
}

// Optional: Close manually if using a close button
function closePopup() {
    const popup = document.getElementById("successPopup");
    if (popup) {
        popup.style.display = "none";
    }
}
