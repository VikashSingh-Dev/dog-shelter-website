// firebase config
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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

import { signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// logout function
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("User signed out successfully");
      alert("You have been logged out successfully.");
      window.location.reload();
    }).catch((error) => {
      // An error happened.
      console.error("Sign out error: ", error);
      alert("Error signing out: " + error.message);
    });
  });
}

onAuthStateChanged(auth, (user) => {
    const logoutBtn = document.getElementById('logout-btn');
    if (user) {
        console.log("User is signed in: ", user.email);
        if (logoutBtn) {
            logoutBtn.style.display = 'block'; // Show the logout button
        }
        else {
            console.log("No user is currently logged in.");
            if (logoutBtn) {
                logoutBtn.style.display = 'none'; // Hide the logout button
            }
        } 
    }
});
