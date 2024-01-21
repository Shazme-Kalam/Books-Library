import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const appSettings = {
    databaseURL: "https://smit-71af3-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(appSettings);
const db = getDatabase(app);
const booksRef = ref(db, "books");

// Function to add a book
function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const category = document.getElementById("category").value;
    const image = document.getElementById("image").value;
    const url = document.getElementById("url").value;
    const price = document.getElementById("price").value;

    // Check if any field is empty
    if (!title || !author || !category) {
        alert("Please fill in all fields.");
        return;
    }

    // Push a new book to the database under the selected category
    const newBookRef = push(ref(db, `books/${category}`));

    // Set the book data
    set(newBookRef, {
        title: title,
        author: author,
        category: category,
        image: image,
        price: price,
        url: url
        // Add other book properties as needed
    });

    // Clear the form fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("category").value = "";
    document.getElementById("image").value = "";
    document.getElementById("url").value = "";
    document.getElementById("price").value = "";


    // Optionally, you can focus on the title field after adding a book
    document.getElementById("title").focus();
}

// Attach event listener to the add book button
document.getElementById("addBtn").addEventListener("click", addBook);

// Listen for changes in the database and update the UI
onValue(booksRef, function (snapshot) {
    const cardList = document.getElementById("cardList");
    cardList.innerHTML = "";
    if (snapshot.exists()) {
        const data = snapshot.val();
        Object.keys(data).forEach(function (category) {
            // Add category heading
            cardList.innerHTML += `<div class="m-2 px-5 mx-5 w-75">
            <h2 class="text-center myColor mx-4 p-2 rounded-3">${category}</h2>
        </div>`;
            Object.keys(data[category]).forEach(function (key) {
                const book = data[category][key];
                // Render each book in the UI
                cardList.innerHTML += `<div class="m-2 mx-5 w-25 px-5 p-1 bg-info bg-opacity-10 border border-info border border-4 book-card">
                <img src="${book.image}" alt="${book.title}" width="150" height="200">
                <p class="fw-bold fs-5 color">Title: ${book.title}</p>
                <p class="fw-bold fs-5 color">Author: ${book.author}</p>
                <p class="fw-bold fs-5 color">Price: ${book.price}</p>
                <p class="fw-bold fs-5 color"><a href="${book.url}" target="_blank">Read Book</a></p>
            </div>`;
            });
            cardList.innerHTML += `
            </div>
        </div>`;
        });
    } else {
        console.log("No data in the database.");
    }

    // if (snapshot.exists()) {
    //     const data = snapshot.val();
    //     Object.keys(data).forEach(function (category) {
    //         // Add category heading
    //         cardList.innerHTML += `<div class="m-2 px-5 mx-5 w-75">
    //         <h2 class="text-center myColor mx-4 p-2 rounded-3">${category}</h2></div>`;
    //         Object.keys(data[category]).forEach(function (key) {
    //             const book = data[category][key];
    //             // Render each book in the UI
    //             cardList.innerHTML += `<div class="m-2 mx-5 w-25 px-5 p-1 bg-info bg-opacity-10 border border-info border border-4 book-card">
    //             <img src="${book.image}" alt="${book.title}" width="150" height="200">
    //             <p class="fw-bold fs-5 color">Title: ${book.title}</p>
    //             <p class="fw-bold fs-5 color">Author: ${book.author}</p>
    //             <p class="fw-bold fs-5 color">Price: ${book.price}</p>
    //             <p class="fw-bold fs-5 color"><a href="${book.url}" target="_blank">Read Book</a></p>
    //         </div>`;
    //         });
    //     });
    // } else {
    //     console.log("No data in the database.");
    // }
});


function bookCards(item) {
    const cardList = document.getElementById("cardList");
    cardList.innerHTML += `<div class="col-12 col-sm-6 col-md-4 border border-0">
            <div class="card p-2 m-3 w-75 mx-auto border border-0 shadow-lg" >
                <img src="${item.image}" class="card-img-top alt="book">
                <div class="card-body text-center">
                    <h5 class="card-title fs-6">Title: ${item.title}</h5>
                    <h5 class="card-title fs-6">Author: ${item.author}</h5>
                    <h5 class="card-title fs-6">Cost: ${item.price}</h5>
                    <a href="${item.url}" class="fs-6">Read Book</a>
                </div>
             </div>
         </div>`;
};



// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// const appSettings = {
//     databaseURL: "https://smit-71af3-default-rtdb.firebaseio.com/"
// };

// // Initialize Firebase
// const app = initializeApp(appSettings);
// const db = getDatabase(app);
// const addBookRef = ref(db, "books");

// // Function to add a book
// var title = document.getElementById("title");
// var author = document.getElementById("author");
// var image = document.getElementById("image");
// var read = document.getElementById("read");
// var price = document.getElementById("price");
// var addBtn = document.getElementById("addBtn");
// var category = document.getElementById("category");
// var categoryDropdown = document.getElementById("categoryDropdown");



// // Function to get selected category
// function getSelectedCategory() {
//     return categoryDropdown.value;
// }

// // Function to add a book
// // function addBook() {
//     // Push data to Firebase
//     // const newItemRef = push(addBookRef);
// // }
// function addBook() {
//     const newItemKey = newItemRef.key;
//     const selectedCategory = getSelectedCategory();
//     const newItemRef = push(ref(db, `books/${selectedCategory}`));

//     set(ref(db, `books/${newItemKey}`), {
//         title: title.value,
//         price: price.value,
//         image: image.value,
//         url: read.value,
//         author: author.value,
//         category: category.value
//     });

//     // Clear the form fields
//     document.getElementById("addBookForm").reset();
// }

// // Attach event listener
// addBtn.addEventListener('click', addBook);

// // Listen for changes in the database
// onValue(addBookRef, function (snapshot) {
//     const cardList = document.getElementById("cardList");
//     cardList.innerHTML = "";

//     if (snapshot.exists()) {
//         const data = snapshot.val();
//         Object.keys(data).forEach(function (key) {
//             bookCards(data[key]);
//         });
//     }
// });

// // Function to render book cards
// function bookCards(item) {
//     const cardList = document.getElementById("cardList");
//     cardList.innerHTML += `<div class="col-12 col-sm-6 col-md-4 border border-0">
//         <div class="card p-2 m-3 w-75 mx-auto border border-0 shadow-lg" >
//             <img src="${item.image}" class="card-img-top imgHeight" alt="book" height="05%">
//             <div class="card-body text-center">
//                 <h5 class="card-title fs-6">Title: ${item.title}</h5>
//                 <h5 class="card-title fs-6">Author: ${item.author}</h5>
//                 <h5 class="card-title fs-6">Cost: ${item.price}</h5>
//                 <a href="${item.url}" class="fs-6">Read Book</a>
//             </div>
//         </div>
//     </div>`;
// };
