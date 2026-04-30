const openCart = document.getElementById("openCart");
const closeCart = document.getElementById("closeCart");
const cartOverlay = document.getElementById("cartOverlay");

openCart.addEventListener("click", function () {
    cartOverlay.classList.add("active");
});

closeCart.addEventListener("click", function () {
    cartOverlay.classList.remove("active");
});