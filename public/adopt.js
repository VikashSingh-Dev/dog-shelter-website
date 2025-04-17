
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
    import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
    import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

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

    let state = [];
    const API_KEY = 'AIzaSyATwsq8hyn3qo-t7ro41vT5ACS-2XaO1bY';
    const subId = 'user-123';

  
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged in as:", user.email);
        loadBookmarks(); 
      } else {
        console.log("No user logged in");
      }
    });

    async function getBreeds() {
      let response = await fetch('https://api.thedogapi.com/v1/breeds');
      let data = await response.json();
      state = data;
      displayBreeds(data);
    }

    getBreeds();

    function displayBreeds(data) {
      let result = document.querySelector('#result');
      let html = '';

      for (let dog of data) {
        let imageUrl = '';
        if (dog.image && dog.image.url) {
          imageUrl = dog.image.url;
        } else if (dog.reference_image_id) {
          imageUrl = `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`;
        }

        if (imageUrl) {
          html += `
            <article class="card">
              <img src="${imageUrl}" alt="${dog.name}" width="220" height="180"/>
              <p><strong>Breed Type:</strong> ${dog.name}</p><br>
              <p><strong>Breed Group:</strong> ${dog.breed_group}</p><br>
              <p><strong>Life Span:</strong> ${dog.life_span}</p><br>
              <button onclick="showDetails(${dog.id})">View Details</button>
              <button onclick="bookmarkDog('${dog.id}')">❤️ Bookmark</button>
            </article>
          `;
        }
      }

      result.innerHTML = html;
    }

    window.bookmarkDog = async function(dogId) {
      const user = auth.currentUser;

      if (!user) {
        alert("Please log in to bookmark this dog.");
        return;
      }
      try {
        const docRef = await addDoc(collection(db, "bookmarks"), {
          dogId: dogId,
          userId: user.uid,
          createdAt: new Date()
        });
        alert("Dog bookmarked!");
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    };

    async function loadBookmarks() {
      const user = auth.currentUser;
      if (user) {
        const querySnapshot = await getDocs(collection(db, "bookmarks"));
        const bookmarks = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().userId === user.uid) {
            bookmarks.push(doc.data().dogId);
          }
        });
        displayBookmarkedDogs(bookmarks);
      }
    }

    function displayBookmarkedDogs(bookmarks) {
      let html = '';
      bookmarks.forEach((dogId) => {
        const dog = state.find(d => d.id === dogId);
        if (dog) {
          let imageUrl = '';
          if (dog.image && dog.image.url) {
            imageUrl = dog.image.url;
          } else if (dog.reference_image_id) {
            imageUrl = `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`;
          }
          html += `
            <div class="bookmarked-dog">
              <img src="${imageUrl}" alt="${dog.name}" width="220" height="180"/>
              <p><strong>Breed:</strong> ${dog.name}</p>
            </div>
          `;
        }
      });
      document.querySelector('#bookmarks').innerHTML = html;
    }

    function showDetails(breedId) {
      let breed = state.find(dog => dog.id === breedId);
      if (breed) {
        document.getElementById('breedName').textContent = 'Breed: ' + breed.name;
        document.getElementById('breedGroup').textContent = 'Group: ' + (breed.breed_group || 'Unknown');
        document.getElementById('lifeSpan').textContent = 'Life Span: ' + (breed.life_span || 'Unknown');
        document.getElementById('additionalInfo').textContent = 'Temperament: ' + (breed.temperament || 'Unknown') + ' | Origin: ' + (breed.origin || 'Unknown');
        document.getElementById('breedDetails').style.display = 'block';
      }
    }

    function closeModal() {
      document.getElementById('breedDetails').style.display = 'none';
    }

    function search() {
      let searchKey = document.querySelector('#searchKey').value.toUpperCase();
      let results = [];

      for (let dog of state) {
        let searchText = dog.name.toUpperCase();
        if (searchText.includes(searchKey)) {
          results.push(dog);
        }
      }

      displayBreeds(results);
    }