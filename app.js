import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
const appSettings = {
    databaseURL: "https://smit-71af3-default-rtdb.firebaseio.com/"
}
// Initialize Firebase
const app = initializeApp(appSettings);
const db = getDatabase(app);
const addBookRef = ref(db, "Books");

// Function to add a book
function addBook() {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var image = document.getElementById("image").value;
    var read = document.getElementById("read").value;
    var price = document.getElementById("price").value;

    // Push data to Firebase
    const newItemRef = push(addBookRef);
    const newItemKey = newItemRef.key;

    set(ref(db, `Books/${newItemKey}`), {
        title: title,
        price: price,
        image: image,
        url: read,
        author: author
    });

    // Clear the form fields
    document.getElementById("addBookForm").reset();
}

// Listen for changes in the database
onValue(addBookRef, function (snapshot) {
    const cardList = document.getElementById("cardList");
    cardList.innerHTML = "";

    if (snapshot.exists()) {
        const data = snapshot.val();
        Object.keys(data).forEach(function (key) {
            bookCards(data[key]);
        });
    }
});

// Function to render book cards
function bookCards(item) {
    const cardList = document.getElementById("cardList");
    cardList.innerHTML += `<div class="col-12 col-sm-6 col-md-4 border border-0">
        <div class="card p-2 m-3 w-75 mx-auto border border-0 shadow-lg" >
            <img src="${item.image}" class="card-img-top imgHeight" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title fs-3">Title: ${item.title}</h5>
                <h5 class="card-title fs-3">Author: ${item.author}</h5>
                <h5 class="card-title fs-4">Cost: ${item.price}</h5>
                <a href="${item.url}" class="fs-6">Read Book</a>
            </div>
        </div>
    </div>`;
}




