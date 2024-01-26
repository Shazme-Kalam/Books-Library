import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const appSettings = {
    databaseURL: "https://smit-71af3-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(appSettings);
const db = getDatabase(app);
// const booksRef = ref(db, "books");

// Function to add a book
function addBook(category) {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    // const category = document.getElementById("category").value; // Updated to use the category dropdown
    const image = document.getElementById("image").value;
    const url = document.getElementById("url").value;
    const price = document.getElementById("price").value;

    function addBook(book, category) {
        console.log("Adding book:", book);
        console.log("Category:", category);

        if (!title || !author || !category) {
            alert("Please fill in all fields.");
            return;
        }

        var booksCard = document.getElementById("books")


const newBookRef = push(ref(db, `books/${category(cardListArabic).value}`)); 

console.log("🚀 ~ //onValue ~ newBookRef:", newBookRef)
console.log("🚀 ~ addBook ~ newBookRef:", newBookRef);

// Set the book data under the generated key
set(newBookRef, {
    title: title.value,
    author: author.value,
    category: category.value,
    image: image.value,
    price: price.value,
    url: url.value
});


        // Clear the form fields
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("category").value = ""; // Clear the dropdown selection
        document.getElementById("image").value = "";
        document.getElementById("url").value = "";
        document.getElementById("price").value = "";

        // Optionally, you can focus on the title field after adding a book
        document.getElementById("title").focus();
    }
};


  addBook("English");
  addBook("Urdu");
  addBook("Science");
  addBook("Islamic");
   addBook("Arabic");  
    addBook("Children")
   console.log("Book added successfully!");

   // Reference to the 'books' node in your database
const booksRef = ref(db, 'books');

// Reference to the container where you want to display the books on the home page
const cardListArabic = document.getElementById("cardListArabic");

document.getElementById("addBtn").addEventListener("click", function () {
    const selectedCategory = document.getElementById("category").value; // Get the selected category from the dropdown
    addBook(cardListArabic); // Pass the selected category to the addBook function
    console.log("Book added successfully!");
});

onValue(booksRef, (snapshot) => {
    // Clear existing content before adding new books
    cardListArabic.innerHTML = "";

    // Get the snapshot value
    const booksData = snapshot.val();

    // Loop through each category
    for (const categoryKey in booksData) {
        const category = booksData[categoryKey];

        // Loop through each book in the category
        for (const bookKey in category) {
            const book = category[bookKey];

            // Create HTML elements to display the book
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card m-2 border-info';
            cardDiv.style.maxWidth = '340px';
            cardDiv.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4 m-2">
                        <img src="${book.image}" class="img-fluid rounded-start" alt="${book.title}">
                    </div>
                    <div class="col-md-6 m-2">
                        <div class="card-body">
                            <h5 class="card-title fs-5">Title: ${book.title}</h5>
                            <p class="card-text fs-6">Author: ${book.author}</p>
                            <p class="card-text fs-6 color">Price: ${book.price}</p>
                            <p class="fw-bold fs-5 color"><a href="${book.url}" target="_blank">Read Book</a></p>
                        </div>
                    </div>
                </div>
            `;

            // Append the created card to the cardListArabic container
            cardListArabic.appendChild(cardDiv);
        }
    }
});

const cardListScience = document.getElementById("cardListScience");

document.getElementById("addBtn").addEventListener("click", function () {
    const selectedCategory = document.getElementById("category").value; // Get the selected category from the dropdown
    addBook(cardListScience); // Pass the selected category to the addBook function
    console.log("Book added successfully!");
});

onValue(booksRef, (snapshot) => {
    // Clear existing content before adding new books
    cardListScience.innerHTML = "";

    // Get the snapshot value
    const booksData = snapshot.val();

    // Loop through each category
    for (const categoryKey in booksData) {
        const category = booksData[categoryKey];

        // Loop through each book in the category
        for (const bookKey in category) {
            const book = category[bookKey];

            // Create HTML elements to display the book
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card m-2 border-info';
            cardDiv.style.maxWidth = '340px';
            cardDiv.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4 m-2">
                        <img src="${book.image}" class="img-fluid rounded-start" alt="${book.title}">
                    </div>
                    <div class="col-md-6 m-2">
                        <div class="card-body">
                            <h5 class="card-title fs-5">Title: ${book.title}</h5>
                            <p class="card-text fs-6">Author: ${book.author}</p>
                            <p class="card-text fs-6 color">Price: ${book.price}</p>
                            <p class="fw-bold fs-5 color"><a href="${book.url}" target="_blank">Read Book</a></p>
                        </div>
                    </div>
                </div>
            `;

            // Append the created card to the cardListArabic container
            cardListScience.appendChild(cardDiv);
        }
    }
});

//    const newBookRef = push(ref(db, `books/${cardListArabic.value}`)); 

// // Listen for changes in the database and update the UI
// const cardList = document.getElementById("cardListArabic");
// // onValue(booksRef, function (snapshot) {
//     onValue(ref(db, newBookRef), (snapshot) => {
//     const data = Object.values(snapshot.val());
//     const data1 = Object.values(data[0])
//     // console.log("🚀 ~ data1:", data1)
//     for (let index = 0; index < data1.length; index++) {
//         // console.log(data1[index]);
//         const val = data1[index]
//         // console.log("🚀 ~ val:", val)
//         cardList.innerHTML += `<div class="card m-2 border-info" style="max-width: 340px;">
//         <div class="row g-0">
//           <div class="col-md-4 m-2">
//             <img src="${val.image}" class="img-fluid rounded-start" alt="${val.title}">
//           </div>
//           <div class="col-md-6 m-2">
//             <div class="card-body">
//             <h5 class="card-title fs-5">Title: ${val.title}</h5>
//             <p class="card-text fs-6">Author: ${val.author}</p>
//               <p class="card-text fs-6 color">Rs. ${val.price}</p>
//               <p class="fw-bold fs-5 color"><a href="${val.url}" target="_blank">Read Book</a></p>
//             </div>
//           </div>
//         </div>
//       </div>`
//     }
// });
