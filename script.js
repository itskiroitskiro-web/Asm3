const openCart = document.getElementById("openCart");
const closeCart = document.getElementById("closeCart");
const cartOverlay = document.getElementById("cartOverlay");

if (openCart && closeCart && cartOverlay) {
    openCart.addEventListener("click", function () {
        cartOverlay.classList.add("active");
    });

    closeCart.addEventListener("click", function () {
        cartOverlay.classList.remove("active");
    });
}

const payNowBtn = document.getElementById("payNowBtn");

if (payNowBtn) {
    payNowBtn.addEventListener("click", function () {
        window.location.href = "success.html";
    });
}

// search function
const searchBtn = document.querySelector('.search-btn');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const suggestionsBox = document.getElementById("suggestions");


// mimic my products data
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

    const regex = new RegExp(`(${keyword})`, "gi");
    return text.replace(regex, `<b>$1</b>`);
}

function renderSuggestions(keyword) {
    suggestionsBox.innerHTML = "";

    if (keyword === "") return;

    const filtered = suggestionsList.filter(item =>
        item.toLowerCase().includes(keyword)
    );

    filtered.forEach(text => {
        const span = document.createElement("span");
        span.innerHTML = highlightMatch(text, keyword);

        span.addEventListener("click", () => {
            searchInput.value = text;
            searchInput.dispatchEvent(new Event("input"));
        });

        suggestionsBox.appendChild(span);
    });
}

function renderProducts(keyword) {
    searchResults.innerHTML = "";

    if (keyword === "") return;

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(keyword)
    );

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

if (searchBtn && searchOverlay && searchInput && searchResults && suggestionsBox) {
    searchBtn.addEventListener("click", () => {
        searchOverlay.classList.add("active");
        searchInput.focus();
    });

    searchOverlay.addEventListener("click", (event) => {
        if (event.target === searchOverlay) {
            searchOverlay.classList.remove("active");
            searchInput.value = "";
            searchResults.innerHTML = "";
            suggestionsBox.innerHTML = "";
        }
    });

    searchInput.addEventListener("input", () => {
        const keyword = searchInput.value.toLowerCase().trim();

        renderSuggestions(keyword);
        renderProducts(keyword);
    });
}