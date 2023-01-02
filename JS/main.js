const button = document.getElementById("button");
const unread = document.querySelectorAll(".notification--unread");
const quantity = document.getElementById("quantity")

button.addEventListener("click", () => {
    removeUnread();
    updateQuantity()
})

function removeUnread() {
    unread.forEach(element => {
        element.classList.remove("notification--unread")
    });
}

function updateQuantity() {
    quantity.firstChild.data = 0
}

