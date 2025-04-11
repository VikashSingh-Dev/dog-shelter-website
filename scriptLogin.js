const container = document.getElementById('container');
const loginButton = document.getElementById('login');
const registerButton = document.getElementById('register');
const wrapper = document.querySelector('.toggle');
const  bg = document.querySelector('body');

registerButton.addEventListener('click', () => {
  container.classList.add("active");
});

loginButton.addEventListener('click', () => {
  container.classList.remove("active");
});

registerButton.addEventListener('click', () => {
  wrapper.classList.add("active");
});

loginButton.addEventListener('click', () => {
  wrapper.classList.remove("active");
});

registerButton.addEventListener('click', () => {
  bg.classList.add("active");
});

loginButton.addEventListener('click', () => {
  bg.classList.remove("active");
});