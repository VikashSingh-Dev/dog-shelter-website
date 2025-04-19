function Send() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const areaCode = document.getElementById("areaCode").value.trim();
  const prefix = document.getElementById("prefix").value.trim();
  const lineNumber = document.getElementById("lineNumber").value.trim();

  // Simple validation
  if (!name || !email || !prefix || !lineNumber) {
      alert("Please fill in all required fields.");
      return;
  }

  // Show success message, hide form
  document.getElementById("formFields").style.display = "none";
  document.getElementById("thankYou").style.display = "block";

  // Auto-close after 3 seconds
  setTimeout(() => {
      closePopup();
  }, 3000);
}

function closePopup() {
  const popup = document.getElementById("successPopup");
  popup.style.display = "none";

  // Reset form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("areaCode").value = "";
  document.getElementById("prefix").value = "";
  document.getElementById("lineNumber").value = "";

  // Restore form
  document.getElementById("formFields").style.display = "block";
  document.getElementById("thankYou").style.display = "none";
}

// Optional: trigger to show popup manually
function showPopup() {
  document.getElementById("successPopup").style.display = "flex";
}



