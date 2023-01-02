const button = document.getElementById("button");
const unread = document.querySelectorAll(".notification--unread");

button.addEventListener("click", () => {
    removeUnread();
})

function removeUnread() {
    unread.forEach(element => {
        element.classList.remove("notification--unread")
    });
}
