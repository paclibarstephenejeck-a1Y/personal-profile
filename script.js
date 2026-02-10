// Welcome message
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Anime World 🌸");

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Enjoy exploring Anime World!");
        });
    });
});
