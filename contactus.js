// Sticky navigation on scroll
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// Show contact form popup
function showContactForm() {
  document.getElementById("contactPopup").style.display = "block";
}

// Submit contact form
function submitContactForm() {
  var name = document.getElementById("contactName").value.trim();
  var email = document.getElementById("contactEmail").value.trim();
  var message = document.getElementById("contactMessage").value.trim();

  if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields!");
  } else {
      document.getElementById("contactFields").style.display = "none";
      document.getElementById("thankYouMessage").style.display = "block";
  }
}

// Close contact form popup and reset fields
function closeContactForm() {
  document.getElementById("contactPopup").style.display = "none";

  document.getElementById("contactName").value = "";
  document.getElementById("contactEmail").value = "";
  document.getElementById("contactMessage").value = "";

  document.getElementById("contactFields").style.display = "block";
  document.getElementById("thankYouMessage").style.display = "none";
}

