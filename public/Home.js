window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});

function showPopup() {
    document.getElementById("donatePopup").style.display = "block";
}


function submitDonation() {
    var amount = document.getElementById("cashAmount").value;

    if (amount === "") {
        alert("Please enter an amount!");
    } else {
        document.getElementById("formFields").style.display = "none";
        document.getElementById("thankYou").style.display = "block";
    }
}

function closePopup() {
    document.getElementById("donatePopup").style.display = "none";

    document.getElementById("donorName").value = "";
    document.getElementById("checkNumber").value = "";
    document.getElementById("cashAmount").value = "";

    document.getElementById("formFields").style.display = "block";
    document.getElementById("thankYou").style.display = "none";
}