
   
const apiUrl = 'https://dog.ceo/api/breeds/image/random/20';
let characterData = [];
let currentIndex = 0;

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        characterData = data.message;

        if (characterData.length > 0) {
            displayCharacter(currentIndex);
            startSlideshow();  
        } 
    } catch (error) {
        console.log(error);
    }
}

function displayCharacter(index) {
    const dog = characterData[index];
    const itemDetails = document.querySelector('#item-details');
    itemDetails.innerHTML = `
        
        <img src="${dog}">
    `;
}
window.changeCharacter = function (direction){

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = characterData.length - 1;  
    } else if (currentIndex >= characterData.length) {
        currentIndex = 0;  
    }

    displayCharacter(currentIndex);
}

function startSlideshow() {
    setInterval(function() {
        changeCharacter(1);  
    }, 3000);  
}

fetchData(); 

let count = 0;
      
function updateCount() {
    if (count<360){
  count = count + 5;
  document.getElementById("counter").innerText = count;
}
}
setInterval(updateCount, 350);


