import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

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
const db = getFirestore(app);

const reviewForm = document.getElementById("reviewForm");
const reviewText = document.getElementById("reviewText");
const reviewSlider = document.getElementById("review-slider");

onAuthStateChanged(auth, (user) => {
  if (user && user.email === "bob@pawsome.com") {
    reviewForm.style.display = "block";
    loadReviews();
  } else {
    reviewForm.style.display = "none";
  }
});

reviewForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const review = reviewText.value;
  const rating = parseInt(document.getElementById("starRating").value);

  if (review && rating) {
    await addDoc(collection(db, "reviews"), {
      review,
      rating,
      createdAt: Date.now(),
    });

    reviewText.value = "";
    loadReviews();
  }
});

function generateStars(num) {
  return Array.from({ length: num }, () => `<i class="fa-solid fa-star"></i>`).join('');
}

async function loadReviews() {
  const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  const newReviews = Array.from(snapshot.docs).map(doc => {
    const data = doc.data();
    return `
      <div class="review-item">
        <div class="reviewers">
          <div class="review-name">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="avatar" class="review-img">
            <div>
              <h4>Bob</h4>
              <div class="stars">
                ${generateStars(data.rating)}
              </div>
            </div>
          </div>
          <i class="fa-solid fa-quote-right"></i>
        </div>
        <p class="review-text">${data.review}</p>
      </div>`;
  }).join("");

  const hardcoded = document.querySelectorAll(".review-item");
  reviewSlider.innerHTML = newReviews + [...hardcoded].map(e => e.outerHTML).join('');
  updateActive();
}

// Carousel logic
let scrollIndex = 0;
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function updateActive() {
  document.querySelectorAll(".review-item").forEach((el, i) => {
    el.classList.toggle("active", i === scrollIndex);
  });
}

nextBtn.addEventListener("click", () => {
  const items = document.querySelectorAll(".review-item");
  if (scrollIndex < items.length - 1) scrollIndex++;
  reviewSlider.scrollTo({ left: scrollIndex * 420, behavior: "smooth" });
  updateActive();
});

prevBtn.addEventListener("click", () => {
  if (scrollIndex > 0) scrollIndex--;
  reviewSlider.scrollTo({ left: scrollIndex * 420, behavior: "smooth" });
  updateActive();
});

// window.addEventListener("load", loadReviews);