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

  // Optional: Clear the form
  document.getElementById("contactName").value = "";
  document.getElementById("contactEmail").value = "";
  document.getElementById("contactMessage").value = "";

  // Auto-close after 3 seconds
  setTimeout(() => {
      document.getElementById("successPopup").style.display = "none";
  }, 3000);
}


