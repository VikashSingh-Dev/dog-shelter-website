
const popup = document.getElementById("successPopup");
const thankYouMessage = document.getElementById("thankYou");
const formFields = document.getElementById("formFields");

function showPopup() {
    popup.style.display = "flex";
}

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

    formFields.style.display = "none";
    thankYouMessage.style.display = "block";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("areaCode").value = "";
    document.getElementById("prefix").value = "";
    document.getElementById("lineNumber").value = "";

    setTimeout(() => {
        popup.style.display = "none";
        thankYouMessage.style.display = "none";
        formFields.style.display = "block";
    }, 3000);
}

function closePopup() {
    popup.style.display = "none";
    thankYouMessage.style.display = "none";
    formFields.style.display = "block";
}




