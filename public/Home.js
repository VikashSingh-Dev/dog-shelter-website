// Sticky navbar on scroll
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    if (nav) {
        nav.classList.toggle("sticky", window.scrollY > 0);
    }
});
const popup = document.getElementById("donatePopup");
const thankYouMessage = document.getElementById("thankYou");
const formFields = document.getElementById("formFields");

function showPopup() {
    popup.style.display = "block";
}

function submitDonation() {
    const donorName = document.getElementById("donorName").value;
    const checkNumber = document.getElementById("checkNumber").value;
    const cashAmount = document.getElementById("cashAmount").value;

    if (!donorName || !checkNumber || !cashAmount) {
        alert("Please fill in all fields!");
        return;
    }

    formFields.style.display = "none";
    thankYouMessage.style.display = "block";

    document.getElementById("donorName").value = "";
    document.getElementById("checkNumber").value = "";
    document.getElementById("cashAmount").value = "";

    setTimeout(() => {
        popup.style.display = "none";
        thankYouMessage.style.display = "none";
        formFields.style.display = "block";
    }, 2000);
}

function closePopup() {
    popup.style.display = "none";
    thankYouMessage.style.display = "none";
    formFields.style.display = "block";
}

/*
function showPopup() {
    const popup = document.getElementById("donatePopup");
    if (popup) {
        popup.style.display = "flex";
    }
}


function submitContactForm() {
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields!");
        return;
    }

 
    document.getElementById("donatePopup").style.display = "flex";

    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactMessage").value = "";

    
    setTimeout(() => {
        document.getElementById("donatePopup").style.display = "none";
    }, 2000);
}

function closePopup() {
    const popup = document.getElementById("donatePopup");
    if (popup) {
        popup.style.display = "none";
    }
}
*/