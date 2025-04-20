
const form = document.getElementById('contactForm');
const popup = document.getElementById('contactPopup');
const thankYouMessage = document.getElementById('thankYou');

form.addEventListener('submit', function(event) {
  event.preventDefault();  

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let areaCode = document.getElementById('areaCode').value;
  let prefix = document.getElementById('prefix').value;
  let lineNumber = document.getElementById('lineNumber').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  if (!name || !email || !areaCode || !prefix || !lineNumber || !subject || !message) {
    alert("Please fill in all fields!");  
    return;  
  }

  alert("Thank you! Your Pawsome message has been received!");
  popup.style.display = 'block';
  thankYouMessage.style.display = 'block';

  // Resetting the form fields so User and input again 
  form.reset();

  setTimeout(function() {
    popup.style.display = 'none'; 
    thankYouMessage.style.display = 'none';  
  }, 2000);
});
