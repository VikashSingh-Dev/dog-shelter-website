// Show contact popup manually (if needed)
function showPopup() {
  const popup = document.getElementById("successPopup");
  if (popup) {
      popup.style.display = "flex";
  }
}

// Submit contact form and show success message
function submitContactForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const areaCode = document.getElementById("areaCode").value.trim();
  const prefix = document.getElementById("prefix").value.trim();
  const lineNumber = document.getElementById("lineNumber").value.trim();

  if (!name || !email || !prefix || !lineNumber) {
      alert("Please fill in all required fields!");
      return;
  }

  // Show success message
  const formFields = document.getElementById("formFields");
  const thankYou = document.getElementById("thankYou");
  const popup = document.getElementById("successPopup");

  if (formFields && thankYou && popup) {
      formFields.style.display = "none";
      thankYou.style.display = "block";

      // Auto-hide popup after 3 seconds
      setTimeout(() => {
          closePopup();
      }, 3000);
  }
}

// Optional: Close manually if using a close button
function closePopup() {
  const popup = document.getElementById("successPopup");
  const formFields = document.getElementById("formFields");
  const thankYou = document.getElementById("thankYou");

  if (popup && formFields && thankYou) {
      popup.style.display = "none";
      formFields.style.display = "block";
      thankYou.style.display = "none";

      // Clear form fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("areaCode").value = "";
      document.getElementById("prefix").value = "";
      document.getElementById("lineNumber").value = "";
  }
}




