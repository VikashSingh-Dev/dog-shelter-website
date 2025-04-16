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

// firebase config
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyATwsq8hyn3qo-t7ro41vT5ACS-2XaO1bY",
  authDomain: "pawsomerescues-info1601-dev.firebaseapp.com",
  projectId: "pawsomerescues-info1601-dev",
  storageBucket: "pawsomerescues-info1601-dev.firebasestorage.app",
  messagingSenderId: "370193559417",
  appId: "1:370193559417:web:0a919b4e60202e3fbe09a8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// signup function
const signupForm = document.querySelector('.sign-up form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = signupForm.querySelector('input[placeholder="Name"]').value.trim();
  const password = signupForm.querySelector('input[placeholder="Password"]').value;

  const fakeEmail = `${username}@pawsome.com`;

  createUserWithEmailAndPassword(auth, fakeEmail, password)
    .then((userCredential) => {
      // Signed in 
      console.log("Signup successful!", userCredential.user);
      alert("Account created successfully!");
    })
    .catch((error) => {
      console.error("Signup error", error.message);
      alert("Signup failed: " + error.message);
    });
});

// login function
const loginForm = document.querySelector('.log-in form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = loginForm.querySelector('input[placeholder="Username"]').value.trim();
  const password = loginForm.querySelector('input[placeholder="Password"]').value;

  if (username !== 'bob' || password !== 'bobpass') {
    alert("Only 'bob' is allowed to login with password 'bobpass'.");
    return;
  }

  const fakeEmail = `${username}@pawsome.com`;

  signInWithEmailAndPassword(auth, fakeEmail, password)
    .then((userCredential) => {
      // Logged in 
      console.log("Login successful!", userCredential.user);
      alert("Welcome Back!");
      window.location.href = "index.html"; // Redirect to home page after login
    })
    .catch((error) => {
      console.error("Login error", error.message);
      alert("Login failed: " + error.message);
    });
  });