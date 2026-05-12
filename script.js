const openCartButtons = document.querySelectorAll(".open-cart-btn");
const closeCart = document.getElementById("closeCart");
const cartOverlay = document.getElementById("cartOverlay");

if (closeCart && cartOverlay) {
    openCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            cartOverlay.classList.add("active");
        });
    }); // check if cart elements exist before adding interactions

    closeCart.addEventListener("click", function () {
        cartOverlay.classList.remove("active");
    });
}

const payNowBtn = document.getElementById("payNowBtn");

if (payNowBtn) {
    payNowBtn.addEventListener("click", function () {
        window.location.href = "success.html";
    });
} // redirect user to success page after payment

// search function
const searchBtn = document.querySelector('.search-btn');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const suggestionsBox = document.getElementById("suggestions");


// simulated product data for search functionality
const products = [
    {
        name: "Who's A Good Boy BABY TEE",
        price: "$32.80",
        img: "images/yellowbabytee.jpeg",
        link:"product.html"
    },
    {
        name: "Rhine Stone Hot Girls Love Techno BABY TEE",
        price: "$60.80",
        img: "images/bluebabytee.jpeg",
        link:"product.html"
    },
    {
        name: "Fresh Cherry Y2K Print Dress Set",
        price: "$32.80",
        img: "images/cherry.jpeg",
        link:"product.html"
    },
    {
        name: "Black Strawberry Y2K Print Mini Skirt",
        price: "$32.80",
        img: "images/strawberry.jpeg",
        link:"product.html"
    }
];

//mimicing my product data
const suggestionsList = [
    "baby tee y2k style",
    "baby tee",
    "cherry kitten baby"
];

//highlight the words
function highlightMatch(text, keyword) {
    if (!keyword) return text;
 // regular expression, 1. highlight matching keyword inside text using regular expression, if keyword is empty, return original text, create regular expression to find matching words and replace matched keyword with bold text.
    const regex = new RegExp(`(${keyword})`, "gi");
    return text.replace(regex, `<b>$1</b>`);
}

// render matching search suggestions
function renderSuggestions(keyword) {
    suggestionsBox.innerHTML = ""; // clear previous suggestions

    if (keyword === "") return; // stop function if input is empty

    const filtered = suggestionsList.filter(item =>
        item.toLowerCase().includes(keyword)
    ); // filter suggestions that include the keyword, and lowercase is to make search case-insensitive

    filtered.forEach(text => {
        const span = document.createElement("span"); // create new span element for each suggestion
        span.innerHTML = highlightMatch(text, keyword);

        span.addEventListener("click", () => {
            searchInput.value = text; // update input value when suggestion is clicked
            searchInput.dispatchEvent(new Event("input")); // important, manually trigger input event to refresh results
        });

        suggestionsBox.appendChild(span);
    });
}  // loop through filtered suggestions

function renderProducts(keyword) {
    searchResults.innerHTML = "";

    if (keyword === "") return;

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(keyword)
    );

    // dynamically insert search result into page, it injects HTML content into the DOM dynamically
    filteredProducts.forEach(product => {
        searchResults.innerHTML += ` 
            <a href="${product.link}" class="search-item">
                <img src="${product.img}" alt="${product.name}">
                <div>
                    <p>${highlightMatch(product.name, keyword)}</p>
                    <p>${product.price}</p>
                </div>
            </a>
        `;
    });
}

// only run search feature if all required elements exist!
if (searchBtn && searchOverlay && searchInput && searchResults && suggestionsBox) {
    searchBtn.addEventListener("click", () => {
        searchOverlay.classList.add("active");
        searchInput.focus(); // automatically focus on input field
    });

    searchOverlay.addEventListener("click", (event) => {
        if (event.target === searchOverlay) {
            searchOverlay.classList.remove("active");
            searchInput.value = "";
            searchResults.innerHTML = "";
            suggestionsBox.innerHTML = "";
        }
    }); // target -- check if user clicked background overlay itself, users might click child element.

    searchInput.addEventListener("input", () => {
        const keyword = searchInput.value.toLowerCase().trim();

        renderSuggestions(keyword);
        renderProducts(keyword);
    });
}

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

if (openMenu && closeMenu && menuOverlay) {
    openMenu.addEventListener("click", function () {
        menuOverlay.classList.add("active");
    });

    closeMenu.addEventListener("click", function () {
        menuOverlay.classList.remove("active");
    });

    menuOverlay.addEventListener("click", function (event) {
        if (event.target === menuOverlay) {
            menuOverlay.classList.remove("active");
        }
    });
}

//open sub menuOverlay

const openSubmenu = document.getElementById("openSubmenu");
const closeSubmenu = document.getElementById("closeSubmenu");
const submenu = document.getElementById("submenu");

if (openSubmenu && closeSubmenu && submenu) {

    openSubmenu.addEventListener("click", function (event) {
        event.preventDefault(); // prevent link from refreshing page, because button is inside an anchor tag, has to stop the browser from following the link.
        submenu.classList.add("active");
    });

    closeSubmenu.addEventListener("click", function () {
        submenu.classList.remove("active");
    });
}