const openCart = document.getElementById("openCart");
const closeCart = document.getElementById("closeCart");
const cartOverlay = document.getElementById("cartOverlay");

openCart.addEventListener("click", function () {
    cartOverlay.classList.add("active");
});

closeCart.addEventListener("click", function () {
    cartOverlay.classList.remove("active");
});

const payNowBtn = document.getElementById("payNowBtn");

if (payNowBtn) {
    payNowBtn.addEventListener("click", function () {
        window.location.href = "success.html";
    });
}