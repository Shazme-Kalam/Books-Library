import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const appSettings = {
    databaseURL: "https://smit-71af3-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(appSettings);
const db = getDatabase(app);
// Firebase Realtime Database ke liye reference
const booksRef = ref(db, 'books');
// 'Add Book' button ka event listener
document.getElementById("addBtn").addEventListener("click", function () {
    const selectedCategory = document.getElementById("category").value;
    addBook(selectedCategory);
});
// addBook function definition
function addBook(category) {
    // Form fields se book ki details retrieve karo
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    // const category = document.getElementById("category").value;
    const image = document.getElementById("image").value;
    const url = document.getElementById("url").value;
    const price = document.getElementById("price").value;
    // Other book details similarly
    const newBookRef = push(ref(db, `books/${category}`));
    set(newBookRef, {
        title: title,
        author: author,
        category: category,
        image: image,
        price: price,
        url: url
        // Other book details
    }).then(() => {
        console.log("Book added successfully!");
    }).catch((error) => {
        console.error("Error adding book:", error);
    });
    // Clear the form fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("category").value = "";
    document.getElementById("image").value = "";
    document.getElementById("url").value = "";
    document.getElementById("price").value = "";
}

const cardListArabic = document.getElementById("cardListArabic");
onValue(booksRef, (snapshot) => {
    cardListArabic.innerHTML = "";
    const booksData1 = snapshot.val();
    const data = Object.values(snapshot.val());
    // console.log("🚀 ~ onValue ~ data :", data )
    const data1 = Object.values(data[0])
    // console.log("🚀 ~ data1:", data1)
    for (let index = 0; index < data1.length; index++) {
        const val = data1[index]
        // HTML elements create karke book ko display karo
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card m-3 bg-info-subtle mx-5 border-info';
        cardDiv.style.maxWidth = '340px';
        cardDiv.innerHTML = `
        <div class="row g-0">
        <div class="col-md-4 mt-2">
          <img src="${val.image}" class="img-fluid rounded-start" alt="${val.title}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Title:${val.title}</h5>
            <p class="card-text">Author:${val.author}</p>
            <p class="card-text fs-6">Price: ${val.price}</p>
            <p class="card-text fw-bold fs-6"><a href="${val.url}" target="_blank">Read Book</a></p>

          </div>
        </div>
      </div>
    </div>`;
        // cardListArabic container mein create ki gayi card ko append karo
        cardListArabic.appendChild(cardDiv);
    }
}
);
const cardListChildren = document.getElementById("cardListChildren");
onValue(booksRef, (snapshot) => {
    cardListChildren.innerHTML = "";
    const booksData2 = snapshot.val();
    const data = Object.values(snapshot.val());
    const data2 = Object.values(data[1])
    // console.log("🚀 ~ data1:", data1)
    for (let index = 0; index < data2.length; index++) {
        const val2 = data2[index]
        // HTML elements create karke book ko display karo
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card m-3 bg-info-subtle mx-5 border-info';
        cardDiv.style.maxWidth = '340px';
        cardDiv.innerHTML = `
        <div class="row g-0">
        <div class="col-md-4 mt-2">
          <img src="${val2.image}" class="img-fluid rounded-start" alt="${val2.title}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Title:${val2.title}</h5>
            <p class="card-text">Author:${val2.author}</p>
            <p class="card-text fs-6">Price: ${val2.price}</p>
            <p class="card-text fw-bold fs-6"><a href="${val2.url}" target="_blank">Read Book</a></p>

          </div>
        </div>
      </div>
    </div>`;

        // cardListChildren container mein create ki gayi card ko append karo
        cardListChildren.appendChild(cardDiv);
    }
}
);
const cardListEnglish = document.getElementById("cardListEnglish");
onValue(booksRef, (snapshot) => {
    cardListEnglish.innerHTML = "";
    const booksData3 = snapshot.val();
    const data = Object.values(snapshot.val());
    const data3 = Object.values(data[2])
    for (let index = 0; index < data3.length; index++) {
        const vlu = data3[index]
        // HTML elements create karke book ko display karo
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card m-3 bg-info-subtle mx-5 border-info';
        cardDiv.style.maxWidth = '340px';
        cardDiv.innerHTML = `
            <div class="row g-0">
              <div class="col-md-4 mt-2">
                <img src="${vlu.image}" class="img-fluid rounded-start" alt="${vlu.title}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Title:${vlu.title}</h5>
                  <p class="card-text">Author:${vlu.author}</p>
                  <p class="card-text fs-6">Price: ${vlu.price}</p>
                  <p class="card-text fw-bold fs-6"><a href="${vlu.url}" target="_blank">Read Book</a></p>

                </div>
              </div>
            </div>
          </div>`;

        // cardListEnglish container mein create ki gayi card ko append karo
        cardListEnglish.appendChild(cardDiv);
    }
}
);
const cardListScience = document.getElementById("cardListScience");
onValue(booksRef, (snapshot) => {
    cardListScience.innerHTML = "";
    const booksData4 = snapshot.val();
    const data = Object.values(snapshot.val());
    const data4 = Object.values(data[3])
    // console.log("🚀 ~ data1:", data1)
    for (let index = 0; index < data4.length; index++) {
        const vale = data4[index]
        // HTML elements create karke book ko display karo
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card m-3 bg-info-subtle mx-5 border-info';
        cardDiv.style.maxWidth = '340px';
        cardDiv.innerHTML = `
        <div class="row g-0">
        <div class="col-md-4 mt-2">
          <img src="${vale.image}" class="img-fluid rounded-start" alt="${vale.title}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Title:${vale.title}</h5>
            <p class="card-text">Author:${vale.author}</p>
            <p class="card-text fs-6">Price: ${vale.price}</p>
            <p class="card-text fw-bold fs-6"><a href="${vale.url}" target="_blank">Read Book</a></p>

          </div>
        </div>
      </div>
    </div>`;

        // cardListScience container mein create ki gayi card ko append karo
        cardListScience.appendChild(cardDiv);
    }
}
);
const cardListUrdu = document.getElementById("cardListUrdu");
onValue(booksRef, (snapshot) => {
    cardListUrdu.innerHTML = "";
    const booksData5 = snapshot.val();
    const data = Object.values(snapshot.val());
    const data5 = Object.values(data[4])
    // console.log("🚀 ~ data1:", data1)
    for (let index = 0; index < data5.length; index++) {
        const valu = data5[index]
        // HTML elements create karke book ko display karo
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card m-3 bg-info-subtle mx-5 border-info';
        cardDiv.style.maxWidth = '340px';
        cardDiv.innerHTML = `
        <div class="row g-0">
        <div class="col-md-4 mt-2">
          <img src="${valu.image}" class="img-fluid rounded-start" alt="${valu.title}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Title:${valu.title}</h5>
            <p class="card-text">Author:${valu.author}</p>
            <p class="card-text fs-6">Price: ${valu.price}</p>
            <p class="card-text fw-bold fs-6"><a href="${valu.url}" target="_blank">Read Book</a></p>

          </div>
        </div>
      </div>
    </div>`;
        // cardListUrdu container mein create ki gayi card ko append karo
        cardListUrdu.appendChild(cardDiv);
    }
}
);
const cardListIslamic = document.getElementById("cardListIslamic");
onValue(booksRef, (snapshot) => {
    cardListIslamic.innerHTML = "";
    const booksData6 = snapshot.val();
    const data = Object.values(snapshot.val());
    const data6 = Object.values(data[5])
    // console.log("🚀 ~ data1:", data1)
    for (let index = 0; index < data6.length; index++) {
        const valU = data6[index]
        // HTML elements create karke book ko display karo
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card m-3 bg-info-subtle mx-5 border-info';
        cardDiv.style.maxWidth = '340px';
        cardDiv.innerHTML = `
        <div class="row g-0">
        <div class="col-md-4 mt-2">
          <img src="${valU.image}" class="img-fluid rounded-start" alt="${valU.title}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Title:${valU.title}</h5>
            <p class="card-text">Author:${valU.author}</p>
            <p class="card-text fs-6">Price: ${valU.price}</p>
            <p class="card-text fw-bold fs-6"><a href="${valU.url}" target="_blank">Read Book</a></p>

          </div>
        </div>
      </div>
    </div>`;

        // cardListIslamic container mein create ki gayi card ko append karo
        cardListIslamic.appendChild(cardDiv);
    }
}
);