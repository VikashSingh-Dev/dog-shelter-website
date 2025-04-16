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
