let count = 0;

const buttons = document.querySelectorAll(".add-to-cart");
const cartDisplay = document.getElementById("cart-count");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        count++;
        cartDisplay.textContent = "🛒 " + count;
        alert("Item added to cart!");
    });
});